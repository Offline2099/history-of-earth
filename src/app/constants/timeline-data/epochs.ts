import { DivisionType } from '../timeline-structure/division-type';
import { TimelineDivision } from '../../types/timeline-division.interface';

export const Paleocene: TimelineDivision = {
  type: DivisionType.epoch,
  name: 'Paleocene',
  start: 66,
  end: 56,
  hasImage: true,
  subdivisions: []
}

export const Eocene: TimelineDivision = {
  type: DivisionType.epoch,
  name: 'Eocene',
  start: Paleocene.end,
  end: 34,
  hasImage: true,
  subdivisions: []
}

export const Oligocene: TimelineDivision = {
  type: DivisionType.epoch,
  name: 'Oligocene',
  start: Eocene.end,
  end: 23,
  hasImage: true,
  subdivisions: []
}

export const Miocene: TimelineDivision = {
  type: DivisionType.epoch,
  name: 'Miocene',
  start: Oligocene.end,
  end: 5.33,
  hasImage: true,
  subdivisions: []
}

export const Pliocene: TimelineDivision = {
  type: DivisionType.epoch,
  name: 'Pliocene',
  start: Miocene.end,
  end: 2.58,
  hasImage: true,
  subdivisions: []
}

export const Pleistocene: TimelineDivision = {
  type: DivisionType.epoch,
  name: 'Pleistocene',
  start: Pliocene.end,
  end: 0.011,
  hasImage: true,
  subdivisions: []
}

export const Holocene: TimelineDivision = {
  type: DivisionType.epoch,
  name: 'Holocene',
  start: Pleistocene.end,
  end: 0,
  hasImage: true,
  subdivisions: []
}