import { DivisionType } from '../division-type';
import { TimelineDivision } from '../../types/timeline-division.interface';
import * as Era from './eras';

export const Hadean: TimelineDivision = {
  type: DivisionType.eon,
  name: 'Hadean',
  start: 4567,
  end: 4000,
  hasImage: true,
  subdivisions: []  
}

export const Archean: TimelineDivision = {
  type: DivisionType.eon,
  name: 'Archean',
  start: Hadean.end,
  end: 2500,
  hasImage: true,
  subdivisions: [Era.Eoarchean, Era.Paleoarchean, Era.Mesoarchean, Era.Neoarchean]
}

export const Proterozoic: TimelineDivision = {
  type: DivisionType.eon,
  name: 'Proterozoic',
  start: Archean.end,
  end: 538,
  hasImage: true,
  subdivisions: [Era.Paleoproterozoic, Era.Mesoproterozoic, Era.Neoproterozoic]
}

export const Phanerozoic: TimelineDivision = {
  type: DivisionType.eon,
  name: 'Phanerozoic',
  start: Proterozoic.end,
  end: 0,
  hasImage: true,
  subdivisions: [Era.Paleozoic, Era.Mesozoic, Era.Cenozoic]
}