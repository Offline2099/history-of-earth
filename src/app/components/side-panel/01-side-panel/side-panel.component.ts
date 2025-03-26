import { Component, HostListener, input, signal } from '@angular/core';
import { NgClass, ViewportScroller } from '@angular/common';
import { TimelineDirection } from '../../../constants/timeline-direction.enum';
import { TimelineBlock } from '../../../types/timeline-block.interface';
import { PanelBlockGroupComponent } from '../02-panel-block-group/panel-block-group.component';

@Component({
  selector: 'app-side-panel',
  imports: [NgClass, PanelBlockGroupComponent],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss'
})
export class SidePanelComponent {

  @HostListener('window:scroll') onWindowScroll() {
    this.verticalOffset = this.scroller.getScrollPosition()[1];
  }

  timeline = input.required<TimelineBlock[]>()
  direction = input.required<TimelineDirection>();

  verticalOffset: number = 0;
  isPanelOpen = signal<boolean>(false);

  constructor(private scroller: ViewportScroller) {}

  togglePanel(): void {
    this.isPanelOpen.update(value => !value);
  }

}
