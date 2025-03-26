import { Component, HostBinding, input } from '@angular/core';
import { LowerCasePipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { TimelineDirection } from '../../../constants/timeline-direction.enum';
import { DivisionType } from '../../../constants/division-type.enum';
import { TimelineBlock } from '../../../types/timeline-block.interface';
import { TimelineService } from '../../../services/timeline.service';

@Component({
  selector: 'app-division-group',
  imports: [LowerCasePipe, NgClass, NgTemplateOutlet],
  templateUrl: './division-group.component.html',
  styleUrl: './division-group.component.scss'
})
export class DivisionGroupComponent {

  readonly TimelineDirection = TimelineDirection;
  readonly DivisionType = DivisionType;

  @HostBinding('class.reversed') get isReversed(): boolean { 
    return this.direction() === TimelineDirection.inverse;
  }

  group = input.required<TimelineBlock[]>();
  direction = input.required<TimelineDirection>();

  constructor(private timeline: TimelineService) {}

  toggleBlock(block: TimelineBlock): void {
    block.isCollapsed = !block.isCollapsed;
  }

  toggleSummary(block: TimelineBlock): void {
    block.isSummaryCollapsed = !block.isSummaryCollapsed;
  }

  navigateToBlock(block: TimelineBlock): void {
    this.timeline.navigateToTimelineBlock(block);
  }

}
