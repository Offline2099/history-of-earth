import { Component, HostBinding, Signal, input } from '@angular/core';
import { LowerCasePipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { TimelineDirection } from '../../../constants/timeline-structure/timeline-direction.enum';
import { DIVISION_TYPE, DivisionType } from '../../../constants/timeline-structure/division-type';
import { TimelineBlock } from '../../../types/timeline-block.interface';
import { DescriptionList } from '../../../types/description';
import { DescriptionComponent } from '../03-description/description.component';
import { TimeScaleComponent } from '../04-time-scale/time-scale.component';
import { TimelineService } from '../../../services/timeline.service';
import { DescriptionService } from '../../../services/description.service';
import { ScreenService } from '../../../services/screen.service';

@Component({
  selector: 'app-division-group',
  imports: [LowerCasePipe, NgClass, NgTemplateOutlet, TimeScaleComponent, DescriptionComponent],
  templateUrl: './division-group.component.html',
  styleUrl: './division-group.component.scss'
})
export class DivisionGroupComponent {

  @HostBinding('class.reversed') get isReversed(): boolean { 
    return this.direction() === TimelineDirection.inverse;
  }

  readonly TimelineDirection = TimelineDirection;
  readonly DivisionType = DivisionType;
  readonly TypeName = DIVISION_TYPE;
  
  group = input.required<TimelineBlock[]>();
  direction = input.required<TimelineDirection>();

  descriptions!: Signal<DescriptionList | null>;

  isDesktop: Signal<boolean>;

  constructor(
    private timeline: TimelineService,
    private description: DescriptionService,
    private screen: ScreenService
  ) {
    this.isDesktop = this.screen.isDesktop;
  }

  ngOnInit(): void {
    this.descriptions = this.description.getDescriptions(this.group()[0].type);
  }

  ngAfterViewInit(): void {
    this.preloadImages(this.group());
  }

  preloadImages(group: TimelineBlock[]): void {
    if (!group) return;
    const imageURLs: string[] = group.filter(division => division.hasImage).map(division => 
      `./img/divisions/${DIVISION_TYPE[division.type].toLowerCase()}/${division.id}.webp`
    );
    const preload = (index: number) => {
      if (index === imageURLs.length) return;
      const img = new Image();
      img.src = imageURLs[index];
      img.onload = () => { preload(index + 1) }
      img.onerror = () => { preload(index + 1) }
    }
    preload(0);
  }

  toggleBlock(block: TimelineBlock): void {
    block.isCollapsed = !block.isCollapsed;
  }

  navigateToBlock(block: TimelineBlock): void {
    this.timeline.navigateToTimelineBlock(block);
  }

}
