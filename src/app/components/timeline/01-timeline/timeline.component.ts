import { Component, input, model } from '@angular/core';
import { NgClass } from '@angular/common';
import { TimelineDirection } from '../../../constants/timeline-direction.enum';
import { TimelineBlock } from '../../../types/timeline-block.interface';
import { DivisionGroupComponent } from '../02-division-group/division-group.component';
import { TimeScaleComponent } from '../04-time-scale/time-scale.component';

interface DirectionControlButton {
  id: TimelineDirection;
  text: string;
}

const BUTTONS: DirectionControlButton[] = [
  {
    id: TimelineDirection.chronological,
    text: 'Chronological'
  },
  {
    id: TimelineDirection.inverse,
    text: 'Inverse'
  }
];

@Component({
  selector: 'app-timeline',
  imports: [NgClass, TimeScaleComponent, DivisionGroupComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

  readonly TimelineDirection = TimelineDirection;
  readonly BUTTONS = BUTTONS;  

  timeline = input.required<TimelineBlock[]>()
  direction = model.required<TimelineDirection>();

  setDirection(direction: TimelineDirection): void {
    this.direction.set(direction);
  }

}
