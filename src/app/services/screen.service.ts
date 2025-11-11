import { Injectable, Signal, computed } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { BREAKPOINTS, Screen } from '../constants/screen';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  width: Signal<Screen>;
  isMobile: Signal<boolean>;
  isTablet: Signal<boolean>;
  isDesktop: Signal<boolean>;

  constructor(private observer: BreakpointObserver) {
    const width: Observable<Screen> = this.observer.observe(Object.values(BREAKPOINTS)).pipe(
      map(breakpointState => this.getScreenState(breakpointState))
    );
    this.width = toSignal(width, { requireSync: true });
    this.isMobile = computed<boolean>(() => this.width() === Screen.mobile);
    this.isTablet = computed<boolean>(() => this.width() === Screen.tablet);
    this.isDesktop = computed<boolean>(() => 
      this.width() !== Screen.mobile && this.width() !== Screen.tablet
    );
  }

  private getScreenState(state: BreakpointState): Screen {
    return Number(
      Object.entries(BREAKPOINTS).find(([_, value]) => state.breakpoints[value])![0]
    ) as Screen;
  }

}