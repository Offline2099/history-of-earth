import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { timer } from 'rxjs';
import { TimelineDirection } from '../constants/timeline-direction.enum';
import { DivisionType } from '../constants/division-type.enum';
import { TimelineDivision } from '../types/timeline-division.interface';
import { TimelineBlock } from '../types/timeline-block.interface';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private scroller: ViewportScroller) {}

  private boundaryText(value: number): string {
    return value ? `≈ ${value} Million Years Ago` : 'Present Time';
  }
  
  private divisionDuration(division: TimelineDivision): Record<TimelineDirection, string[]> {
    return {
      [TimelineDirection.chronological]: [
        division.start + (division.end ? ' - ' + division.end : ' Million Years Ago -'),
        division.end > 0 ? 'Million Years Ago' : 'Present Time'
      ],
      [TimelineDirection.inverse]: [
        division.end > 0 ? division.end + ' - ' + division.start : 'Present Time -',
        division.end > 0 ? 'Million Years Ago' : division.start + ' Million Years Ago'
      ]
    }
  }

  constructTimelineBlocks(ancestors: TimelineBlock[], divisions: TimelineDivision[]): TimelineBlock[] {
    return divisions.map(division => {
      const block: TimelineBlock = {
        ...division,
        path: [...ancestors],
        boundary: {
          start: this.boundaryText(division.start),
          end: this.boundaryText(division.end)
        },
        duration: this.divisionDuration(division),
        isCollapsed: division.type !== DivisionType.eon,
        isSidePanelBlockCollapsed: division.type !== DivisionType.eon,
        isSummaryCollapsed: division.type !== DivisionType.eon && !division.subdivisions.length,
        subBlocks: []
      }
      block.subBlocks = this.constructTimelineBlocks([...block.path, block], block.subdivisions);
      return block;
    });
  }

  navigateToTimelineBlock(block: TimelineBlock): void {
    block.path.forEach(ancestor => ancestor.isCollapsed = false);
    block.isCollapsed = false;
    timer(100).subscribe(() => this.scroller.scrollToAnchor(block.name.toLowerCase()));
  }

}