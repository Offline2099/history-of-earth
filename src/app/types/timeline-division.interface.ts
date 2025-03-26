import { DivisionType } from '../constants/division-type.enum';

export interface TimelineDivision {
  type: DivisionType;
  name: string;
  start: number;
  end: number;
  image?: boolean;
  description: string[];
  subdivisions: TimelineDivision[];
}
