import { DivisionType } from '../division-type';
import { TimelineDivision } from '../../types/timeline-division.interface';
import * as Epoch from './epochs';

export const Siderian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Siderian',
  start: 2500,
  end: 2300,
  hasImage: false,
  subdivisions: []
}

export const Rhyacian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Rhyacian',
  start: Siderian.end,
  end: 2050,
  hasImage: false,
  subdivisions: []
}

export const Orosirian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Orosirian',
  start: Rhyacian.end,
  end: 1800,
  hasImage: false,
  subdivisions: []
}

export const Statherian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Statherian',
  start: Orosirian.end,
  end: 1600,
  hasImage: false,
  subdivisions: []
}

export const Calymmian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Calymmian',
  start: Statherian.end,
  end: 1400,
  hasImage: false,
  subdivisions: []
}

export const Ectasian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Ectasian',
  start: Calymmian.end,
  end: 1200,
  hasImage: false,
  subdivisions: []
}

export const Stenian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Stenian',
  start: Ectasian.end,
  end: 1000,
  hasImage: false,
  subdivisions: []
}

export const Tonian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Tonian',
  start: Stenian.end,
  end: 720,
  hasImage: true,
  subdivisions: []
}

export const Cryogenian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Cryogenian',
  start: Tonian.end,
  end: 635,
  hasImage: true,
  subdivisions: []
}

export const Ediacaran: TimelineDivision = {
  type: DivisionType.period,
  name: 'Ediacaran',
  start: Cryogenian.end,
  end: 538,
  hasImage: true,
  subdivisions: []
}

export const Cambrian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Cambrian',
  start: Ediacaran.end,
  end: 485,
  hasImage: true,
  subdivisions: []
}

export const Ordovician: TimelineDivision = {
  type: DivisionType.period,
  name: 'Ordovician',
  start: Cambrian.end,
  end: 444,
  hasImage: true,
  subdivisions: []
}

export const Silurian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Silurian',
  start: Ordovician.end,
  end: 419,
  hasImage: true,
  subdivisions: []
}

export const Devonian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Devonian',
  start: Silurian.end,
  end: 359,
  hasImage: true,
  subdivisions: []
}

export const Carboniferous: TimelineDivision = {
  type: DivisionType.period,
  name: 'Carboniferous',
  start: Devonian.end,
  end: 299,
  hasImage: true,
  subdivisions: []
}

export const Permian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Permian',
  start: Carboniferous.end,
  end: 252,
  hasImage: true,
  subdivisions: []
}

export const Triassic: TimelineDivision = {
  type: DivisionType.period,
  name: 'Triassic',
  start: Permian.end,
  end: 201,
  hasImage: true,
  subdivisions: []
}

export const Jurassic: TimelineDivision = {
  type: DivisionType.period,
  name: 'Jurassic',
  start: Triassic.end,
  end: 145,
  hasImage: true,
  subdivisions: []
}

export const Cretaceous: TimelineDivision = {
  type: DivisionType.period,
  name: 'Cretaceous',
  start: Jurassic.end,
  end: 66,
  hasImage: true,
  subdivisions: []
}

export const Paleogene: TimelineDivision = {
  type: DivisionType.period,
  name: 'Paleogene',
  start: Cretaceous.end,
  end: 23,
  hasImage: true,
  subdivisions: [Epoch.Paleocene, Epoch.Eocene, Epoch.Oligocene]
}

export const Neogene: TimelineDivision = {
  type: DivisionType.period,
  name: 'Neogene',
  start: Paleogene.end,
  end: 2.58,
  hasImage: true,
  subdivisions: [Epoch.Miocene, Epoch.Pliocene]
}

export const Quaternary: TimelineDivision = {
  type: DivisionType.period,
  name: 'Quaternary',
  start: Neogene.end,
  end: 0,
  hasImage: true,
  subdivisions: [Epoch.Pleistocene, Epoch.Holocene]
}
