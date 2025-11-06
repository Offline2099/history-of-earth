import { DivisionType } from '../constants/division-type';

export interface TimelineDivision {
  type: DivisionType;
  name: string;
  start: number;
  end: number;
  hasImage: boolean;
  subdivisions: TimelineDivision[];
}
