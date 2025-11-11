import { Component, HostBinding, Signal, input, model } from '@angular/core';
import { LowerCasePipe, NgClass } from '@angular/common';
import { TimelineDirection } from '../../../constants/timeline-structure/timeline-direction.enum';
import { DIVISION_TYPE, DivisionType } from '../../../constants/timeline-structure/division-type';
import { TimelineBlock } from '../../../types/timeline-block.interface';
import { TimelineService } from '../../../services/timeline.service';
import { DescriptionService } from '../../../services/description.service';
import { ScreenService } from '../../../services/screen.service';

@Component({
  selector: 'app-panel-block-group',
  imports: [LowerCasePipe, NgClass],
  templateUrl: './panel-block-group.component.html',
  styleUrl: './panel-block-group.component.scss'
})
export class PanelBlockGroupComponent {

  readonly TypeName = DIVISION_TYPE;

  @HostBinding('class.reversed') get isReversed(): boolean { 
    return this.direction() === TimelineDirection.inverse;
  }

  group = input.required<TimelineBlock[]>();
  direction = input.required<TimelineDirection>();
  isPanelOpen = model.required<boolean>();

  isMobile: Signal<boolean>;

  constructor(
    private timeline: TimelineService,
    private description: DescriptionService,
    private screen: ScreenService
  ) {
    this.isMobile = this.screen.isMobile;
  }

  ngOnInit(): void {
    this.preloadDescriptions();
  }

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

  preloadDescriptions(): void {
    const groupType: DivisionType = this.group()[0].type;
    if (groupType === DivisionType.period || groupType === DivisionType.epoch)
      this.description.getDescriptions(groupType);
  }

}
