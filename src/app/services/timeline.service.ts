import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { timer } from 'rxjs';
import { TIMELINE } from '../constants/timeline-data/timeline';
import { TimelineDirection } from '../constants/timeline-structure/timeline-direction.enum';
import { DivisionType } from '../constants/timeline-structure/division-type';
import { TimelineDivision } from '../types/timeline-division.interface';
import { TimelineBlock } from '../types/timeline-block.interface';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  private timeline: TimelineBlock[];

  constructor(private scroller: ViewportScroller) {
    this.timeline = this.constructTimelineBlocks([], TIMELINE);
  }

  private boundaryText(value: number): string {
    return value ? `≈ ${value} Million Years Ago` : 'Present Time';
  }
  
  private divisionDuration(division: TimelineDivision): Record<TimelineDirection, string[]> {
    return {
      [TimelineDirection.chronological]: [
        division.start + (division.end ? ` - ${division.end}` : ' Million Years Ago -'),
        division.end > 0 ? 'Million Years Ago' : 'Present Time'
      ],
      [TimelineDirection.inverse]: [
        division.end > 0 ? `${division.end} - ${division.start}` : 'Present Time -',
        division.end > 0 ? 'Million Years Ago' : `${division.start} Million Years Ago`
      ]
    }
  }

  private constructTimelineBlocks(ancestors: TimelineBlock[], divisions: TimelineDivision[]): TimelineBlock[] {
    return divisions.map(division => {
      const block: TimelineBlock = {
        ...division,
        id: division.name.toLowerCase(),
        ancestors: [...ancestors],
        boundary: {
          start: this.boundaryText(division.start),
          end: this.boundaryText(division.end)
        },
        duration: this.divisionDuration(division),
        isCollapsed: division.type !== DivisionType.eon,
        isSidePanelBlockCollapsed: division.type !== DivisionType.eon,
        isSummaryCollapsed: division.type !== DivisionType.eon && division.subdivisions.length > 0,
        subBlocks: []
      }
      block.subBlocks = this.constructTimelineBlocks([...block.ancestors, block], block.subdivisions);
      return block;
    });
  }

  getTimeline(): TimelineBlock[] {
    return this.timeline;
  }

  navigateToTimelineBlock(block: TimelineBlock): void {
    block.ancestors.forEach(ancestor => ancestor.isCollapsed = false);
    block.isCollapsed = false;
    timer(100).subscribe(() => this.scroller.scrollToAnchor(block.id));
  }

  timelineBlockByTime(group: TimelineBlock[], time: number): TimelineBlock | undefined {
    const block: TimelineBlock | undefined = group.find(block => block.start >= time && block.end < time);
    if (!block || !block.subBlocks.length) return block;
    return this.timelineBlockByTime(block.subBlocks, time);
  }

}