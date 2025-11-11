import { DivisionType } from '../constants/timeline-structure/division-type';

export interface TimelineDivision {
  type: DivisionType;
  name: string;
  start: number;
  end: number;
  hasImage: boolean;
  subdivisions: TimelineDivision[];
}
