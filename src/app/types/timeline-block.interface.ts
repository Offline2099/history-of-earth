import { TimelineDirection } from '../constants/timeline-direction.enum';
import { TimelineDivision } from './timeline-division.interface';

export interface TimelineBlock extends TimelineDivision {
  path: TimelineBlock[];
  boundary: {
    start: string;
    end: string;
  }
  duration: Record<TimelineDirection, string[]>;
  isCollapsed: boolean;
  isSidePanelBlockCollapsed: boolean;
  isSummaryCollapsed: boolean;
  subBlocks: TimelineBlock[];
}
