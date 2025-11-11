import { Component, signal } from '@angular/core';
import { INTRO_TEXT } from './constants/intro-text';
import { FOOTER_NOTES } from './constants/footer-notes';
import { TimelineDirection } from './constants/timeline-structure/timeline-direction.enum';
import { TimelineBlock } from './types/timeline-block.interface';
import { TimelineComponent } from './components/timeline/01-timeline/timeline.component';
import { SidePanelComponent } from './components/side-panel/01-side-panel/side-panel.component';
import { TimelineService } from './services/timeline.service';

@Component({
  selector: 'app-root',
  imports: [TimelineComponent, SidePanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  readonly INTRO_TEXT: string[] = INTRO_TEXT;
  readonly FOOTER_NOTES: string[] = FOOTER_NOTES;

  eons: TimelineBlock[];
  direction = signal<TimelineDirection>(TimelineDirection.chronological);

  constructor(private timeline: TimelineService) {
    this.eons = this.timeline.getTimeline();
  }

}
