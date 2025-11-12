import { Component, HostBinding, computed, input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { TimelineDirection } from '../../../constants/timeline-structure/timeline-direction.enum';
import { DIVISION_TYPE } from '../../../constants/timeline-structure/division-type';
import { TimelineBlock } from '../../../types/timeline-block.interface';
import { TimelineService } from '../../../services/timeline.service';

interface TickMark {
  position: number;
  elementPosition: string;
  label?: string;
}

interface Scale {
  major: TickMark[];
  minor: TickMark[];
}

interface Range {
  start: number;
  end: number;
}

@Component({
  selector: 'app-time-scale',
  imports: [NgClass, NgStyle],
  templateUrl: './time-scale.component.html',
  styleUrl: './time-scale.component.scss',
})
export class TimeScaleComponent {

  @HostBinding('class.inside-block') get isInsideBlock(): boolean {
    return this.block() !== undefined;
  }
  @HostBinding('class.inside-tooltip') get _isInsideTooltip(): boolean {
    return this.isInsideTooltip();
  }
  @HostBinding('class.reversed') get isReversed(): boolean {
    return this.direction() === TimelineDirection.inverse;
  }

  readonly Direction = TimelineDirection;
  readonly TypeName = DIVISION_TYPE;

  direction = input.required<TimelineDirection>();
  block = input<TimelineBlock>();
  isInsideTooltip = input<boolean>(false);
  timeMarkerStart = input<number>(-1);
  timeMarkerEnd = input<number>(-1);

  group = computed<TimelineBlock[]>(() => this.block()?.subBlocks || this.timeline.getTimeline());

  scale = computed<Range>(() => ({
    start: this.group()[this.group().length - 1].end,
    end: this.group()[0].start
  }));
  lengthFractions = computed<Record<string, number>>(() => 
    this.calculateLengthFractions(this.group(), this.scale())
  );

  tickMarks = computed<Scale>(() => 
    this.constructTickMarks(this.direction(), this.scale())
  );

  marker = computed<Range>(() => ({
    start: this.timeMarkerStart(),
    end: this.timeMarkerEnd()
  }));
  markerPosition = computed<string>(() => 
    this.calculateMarkerPosition(this.direction(), this.marker(), this.scale())
  );
  markerLength = computed<string>(() => 
    this.calculateMarkerLength(this.marker(), this.scale())
  );

  constructor(private timeline: TimelineService) {}

  calculateLengthFractions(blocks: TimelineBlock[], scale: Range): Record<string, number> {
    const length: number = scale.end - scale.start;
    return blocks.reduce((acc, block) => {
      acc[block.id] = (block.start - block.end) / length;
      return acc;
    }, {} as Record<string, number>);
  }

  constructTickMarks(direction: TimelineDirection, scale: Range): Scale {
    const length: number = scale.end - scale.start;
    const magnitude: number = `${Math.round(length)}`.length - 1;
    const start: number = this.floorToMagnitude(scale.start, magnitude);
    let step: number = Math.pow(10, magnitude);
    if (step > 0.4 * length) step /= 2;
    if (step < 0.2 * length) step *= 2;
    return {
      major: this.constructMarks(direction, scale, start, step, true),
      minor: this.constructMarks(direction, scale, start, step / 10, false)
    }
  }

  floorToMagnitude(n: number, magnitude: number): number {
    const factor: number = Math.pow(10, magnitude);
    return factor * Math.floor(n / factor);
  }

  constructMarks(direction: TimelineDirection, scale: Range, start: number, step: number, isMajor: boolean): TickMark[] {
    if (scale.end < start || step <= 0) return [];
    const marks: TickMark[] = [];
    const length: number = scale.end - scale.start;
    let time = start;
    while (time < scale.end) {
      if (time > scale.start && !(!isMajor && !(time % (10 * step)))) {
        let position: number = (time - scale.start) / length;
        if (direction === TimelineDirection.inverse) position = 1 - position;
        marks.push({
          position,
          elementPosition: isMajor ? `calc(${100 * position}% - 1px)` : `${100 * position}%`,
          label: isMajor ? this.tickMarkLabel(time, length) : undefined
        });
      } 
      time += step;
    }
    return marks;
  }

  tickMarkLabel(value: number, length: number): string {
    return length > 2e3 
      ? `${Math.round(value / 1e3)} Billion Years Ago`
      : `${Math.round(value)} Million Years Ago`;
  }

  calculateMarkerPosition(direction: TimelineDirection, marker: Range, scale: Range): string {
    const scaleLength: number = scale.end - scale.start;
    const markerLength: number = marker.end > 0 ? (marker.start - marker.end) : 0;
    const position: number = direction === TimelineDirection.chronological
      ? (scale.end - marker.start) / scaleLength
      : 1 - (scale.end - marker.start) / scaleLength - markerLength / scaleLength;
    return `calc(${100 * position}% - 3px)`;
  }

  calculateMarkerLength(marker: Range, scale: Range): string {
    if (marker.end < 0) return '6px';
    const scaleLength = scale.end - scale.start;
    const startPercentage: number = 100 * (scale.end - marker.start) / scaleLength;
    const endPercentage: number = 100 * (scale.end - marker.end) / scaleLength;
    return `calc(${endPercentage - startPercentage}% + 6px)`;
  }

  navigateToBlock(block: TimelineBlock): void {
    this.timeline.navigateToTimelineBlock(block);
  }

}
