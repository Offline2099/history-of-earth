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

  subBlocks = computed<TimelineBlock[]>(() => this.block()?.subBlocks || this.timeline.getTimeline());
  
  start = computed<number>(() => this.subBlocks()[this.subBlocks().length - 1].end);
  end = computed<number>(() => this.subBlocks()[0].start);
  lengthFractions = computed<Record<string, number>>(() => 
    this.calculateLengthFractions(this.subBlocks(), this.end() - this.start())
  );

  tickMarks = computed<Scale>(() => this.constructScale(1e3 * this.start(), 1e3 * this.end()));

  markerPosition = computed<string>(() => 
    this.calculateMarkerPosition(this.timeMarkerStart(), this.end(), this.start())
  );
  markerLength = computed<string>(() => 
    this.calculateMarkerLength(this.timeMarkerStart(), this.timeMarkerEnd(), this.end(), this.start())
  );

  constructor(private timeline: TimelineService) {}

  calculateLengthFractions(blocks: TimelineBlock[], length: number): Record<string, number> {
    return blocks.reduce((acc, block) => {
      acc[block.id] = (block.start - block.end) / length;
      return acc;
    }, {} as Record<string, number>);
  }

  constructScale(scaleStart: number, scaleEnd: number): Scale {
    const length: number = scaleEnd - scaleStart;
    const magnitude: number = `${Math.round(length)}`.length - 1;
    const start: number = this.floorToMagnitude(scaleStart, magnitude);
    let step: number = Math.pow(10, magnitude);
    if (step > 0.4 * length) step /= 2;
    if (step < 0.2 * length) step *= 2;
    return {
      major: this.constructMarks(scaleStart, scaleEnd, start, step, true),
      minor: this.constructMarks(scaleStart, scaleEnd, start, step / 10, false)
    }
  }

  floorToMagnitude(n: number, magnitude: number): number {
    const factor: number = Math.pow(10, magnitude);
    return factor * Math.floor(n / factor);
  }

  constructMarks(scaleStart: number, scaleEnd: number, start: number, step: number, isMajor: boolean): TickMark[] {
    if (scaleEnd < start || step <= 0) return [];
    const marks: TickMark[] = [];
    const length: number = scaleEnd - scaleStart;
    let time = start;
    while (time < scaleEnd) {
      if (time > scaleStart) {
        const position: number = (time - scaleStart) / length;
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
    return length > 2e6 
      ? `${Math.round(value / 1e6)} Billion Years Ago`
      : `${Math.round(value / 1e3)} Million Years Ago`;
  }

  calculateMarkerPosition(marker: number, start: number, end: number): string {
    return `calc(${100 * (start - marker) / (start - end)}% - 3px)`;
  }

  calculateMarkerLength(markerStart: number, markerEnd: number, start: number, end: number): string {
    if (markerEnd < 0) return '6px';
    const startPercentage: number = 100 * (start - markerStart) / (start - end);
    const endPercentage: number = 100 * (start - markerEnd) / (start - end);
    return `calc(${endPercentage - startPercentage}% + 6px)`;
  }

  navigateToBlock(block: TimelineBlock): void {
    this.timeline.navigateToTimelineBlock(block);
  }

}
