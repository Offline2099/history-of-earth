import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, catchError, finalize, first } from 'rxjs';
import { DIVISION_TYPE, DivisionType } from '../constants/division-type';
import { DescriptionList } from '../types/description';

const DATA_URL_BASE: string = 'data/';

interface DescriptionListData {
  isRequested: boolean;
  isFetched: boolean;
  data: WritableSignal<DescriptionList | null>;
}
type Descriptions = Record<DivisionType, DescriptionListData>;

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  private descriptions: Descriptions;

  constructor(private http: HttpClient) {
    this.descriptions = this.constructDataObject();
  }

  private constructDataObject(): Descriptions {
    const types: DivisionType[] = Object.values(DivisionType)
      .filter(value => typeof value === 'number');
    return types.reduce((acc, type) => {
      if (!acc[type]) acc[type] = {
        isRequested: false,
        isFetched: false,
        data: signal(null)
      }
      return acc;
    }, {} as Descriptions);
  }

  private dataURL(type: DivisionType): string {
    return `${DATA_URL_BASE}${DIVISION_TYPE[type].toLowerCase()}s.json`;
  }

  fetchDescriptions(type: DivisionType): Observable<DescriptionList | null> {
    if (this.descriptions[type].isFetched || this.descriptions[type].isRequested)
      return of(null);
    this.descriptions[type].isRequested = true;
    return this.http.get<DescriptionList>(this.dataURL(type)).pipe(
      tap(result => {
        if (result) {
          this.descriptions[type].isFetched = true;
          this.descriptions[type].data.set(result);
        }
      }),
      catchError(error => {
        console.error('Error fetching data:', error);
        return of(null);
      }),
      finalize(() => {
        this.descriptions[type].isRequested = false;
      })
    );
  }

  getDescriptions(type: DivisionType): Signal<DescriptionList | null> {
    this.fetchDescriptions(type).pipe(first()).subscribe();
    return this.descriptions[type].data;
  }

}