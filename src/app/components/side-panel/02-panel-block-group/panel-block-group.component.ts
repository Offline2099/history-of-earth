import { Component, HostBinding, input, model } from '@angular/core';
import { LowerCasePipe, NgClass } from '@angular/common';
import { TimelineDirection } from '../../../constants/timeline-direction.enum';
import { TimelineBlock } from '../../../types/timeline-block.interface';
import { TimelineService } from '../../../services/timeline.service';

@Component({
  selector: 'app-panel-block-group',
  imports: [LowerCasePipe, NgClass],
  templateUrl: './panel-block-group.component.html',
  styleUrl: './panel-block-group.component.scss'
})
export class PanelBlockGroupComponent {

  @HostBinding('class.reversed') get isReversed(): boolean { 
    return this.direction() === TimelineDirection.inverse;
  }

  group = input.required<TimelineBlock[]>();
  direction = input.required<TimelineDirection>();
  isPanelOpen = model.required<boolean>();

  constructor(private timeline: TimelineService) {}

  navigateToBlock(block: TimelineBlock): void {
    this.togglePanel();
    this.timeline.navigateToTimelineBlock(block);
  }

  togglePanel(): void {
    this.isPanelOpen.update(value => !value);
  }

  toggleSidePanelBlock(block: TimelineBlock): void {
    block.isSidePanelBlockCollapsed = !block.isSidePanelBlockCollapsed;
  }

}
