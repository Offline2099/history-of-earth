import {
  Component, HostListener, Signal, signal, input, computed,
  viewChild, ElementRef, Renderer2
} from '@angular/core';
import { NgStyle } from '@angular/common';
import { timer } from 'rxjs';
import { TimelineDirection } from '../../../constants/timeline-structure/timeline-direction.enum';
import { TimelineBlock } from '../../../types/timeline-block.interface';
import { DescriptionElement } from '../../../types/description';
import { TimeScaleComponent } from '../04-time-scale/time-scale.component';
import { TimelineService } from '../../../services/timeline.service';
import { ScreenService } from '../../../services/screen.service';

const TOOLTIP_DELAY: number =  100;
const TOOLTIP_ID: string = 'tooltip';

@Component({
  selector: '[app-time-point]',
  imports: [NgStyle, TimeScaleComponent],
  templateUrl: './time-point.component.html',
  styleUrl: './time-point.component.scss',
})
export class TimePointComponent {

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.isDesktop()) return;
    this.isHovered.set(true);
    timer(TOOLTIP_DELAY).subscribe(() => this.showTooltip());
  }
  @HostListener('mouseleave') onMouseLeave() {
    if (!this.isDesktop()) return;
    this.isHovered.set(false);
    this.destroyTooltipCopy();
  }
  @HostListener('window:scroll') onScroll() {
    if (!this.isDesktop()) return;
    this.isHovered.set(false);
    this.destroyTooltipCopy();
  }

  tooltip = viewChild<ElementRef>('tooltip');

  direction = input.required<TimelineDirection>();
  point = input.required<DescriptionElement>();

  block = computed<TimelineBlock | undefined>(() => this.timelineBlockForPoint(this.point().start));
  isMarkerWithinParent = computed<boolean>(() => 
    !this.markerSpansOutsideParent(this.block(), this.point().end)
  );
  clipPaths = computed<Record<string, string>>(() => 
    this.constructClipPaths(this.block()?.ancestors || [])
  );
  start = computed<number>(() => this.point().start || -1);
  end = computed<number>(() => this.point().end || -1);

  isDesktop: Signal<boolean>;
  isHovered = signal<boolean>(false);

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private timeline: TimelineService,
    private screen: ScreenService
  ) {
    this.isDesktop = this.screen.isDesktop;
  }

  showTooltip(): void {
    if (!this.isHovered()) return;
    this.setTooltipPosition(this.element.nativeElement, this.tooltip()?.nativeElement);
    this.attachTooltipCopyToBody(this.tooltip()?.nativeElement);
  }

  setTooltipPosition(hostElement: HTMLElement, tooltipElement: HTMLElement): void {
    if (!hostElement || !tooltipElement) return;
    const host: DOMRect = hostElement.getBoundingClientRect();
    const tooltip: DOMRect = tooltipElement.getBoundingClientRect();
    const gapVertical: number = 5, gapHorizontal: number = 20;
    const toolpipTop: number = host.top + host.height / 2 > window.innerHeight / 2
      ? host.top - tooltip.height - gapVertical
      : host.bottom + gapVertical;
    let toolpipLeft: number = host.left + host.width / 2 > window.innerWidth / 2
      ? host.left - tooltip.width / 2
      : host.right - tooltip.width / 2;
    if (toolpipLeft < gapHorizontal) toolpipLeft = gapHorizontal;
    else if (toolpipLeft + tooltip.width > window.innerWidth - gapHorizontal)
      toolpipLeft = window.innerWidth - gapHorizontal - tooltip.width;
    this.renderer.setStyle(tooltipElement, 'top', `${toolpipTop}px`);
    this.renderer.setStyle(tooltipElement, 'left', `${toolpipLeft}px`);
  }

  attachTooltipCopyToBody(tooltip: HTMLElement): void {
    if (!tooltip) return;
    const tooltipCopy: HTMLElement = tooltip.cloneNode(true) as HTMLElement;
    if (document.body && tooltipCopy) {
      this.renderer.setAttribute(tooltipCopy, 'id', TOOLTIP_ID);
      this.renderer.appendChild(document.body, tooltipCopy);
    }
    this.renderer.removeChild(tooltip.parentElement, tooltip);
  }

  destroyTooltipCopy(): void {
    const tooltip: HTMLElement | null = document.getElementById(TOOLTIP_ID);
    if (document.body && tooltip) this.renderer.removeChild(document.body, tooltip);
  }

  timelineBlockForPoint(time?: number): TimelineBlock | undefined {
    if (!time) return undefined;
    return this.timeline.timelineBlockByTime(this.timeline.getTimeline(), time);
  }

  markerSpansOutsideParent(block: TimelineBlock | undefined, end?: number): boolean {
    if (!block || !end) return true;
    const endBlock = this.timelineBlockForPoint(end);
    if (!endBlock) return false;
    return endBlock.ancestors[endBlock.ancestors.length - 1].id !== 
      block.ancestors[block.ancestors.length - 1].id;
  }

  constructClipPaths(blocks: TimelineBlock[]): Record<string, string> {
    return blocks.reduce((acc, block) => {
      acc[block.id] = this.constructClipPath(block);
      return acc;
    }, {} as Record<string, string>);
  }

  constructClipPath(block: TimelineBlock): string {
    const parent: TimelineBlock | null = block.ancestors.length > 0
      ? block.ancestors[block.ancestors.length - 1]
      : null;
    const parentStart: number = parent?.start || this.timeline.getTimeline()[0].start;
    const parentEnd: number = parent?.end || 0;
    const parentLength: number = parentStart - parentEnd;
    const start: number = (parentStart - block.start) / parentLength;
    const end: number = (parentStart - block.end) / parentLength;
    return `polygon(${100* start}% 0, ${100 * end}% 0, 100% 100%, 0% 100%)`;
  }

  ngOnDestory(): void {
    this.destroyTooltipCopy();
  }

}
