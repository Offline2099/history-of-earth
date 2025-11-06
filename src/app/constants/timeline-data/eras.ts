import { DivisionType } from '../division-type';
import { TimelineDivision } from '../../types/timeline-division.interface';
import * as Period from './periods';

export const Eoarchean: TimelineDivision = {
  type: DivisionType.era,
  name: 'Eoarchean',
  start: 4000,
  end: 3600,
  hasImage: false,
  subdivisions: []
}

export const Paleoarchean: TimelineDivision = {
  type: DivisionType.era,
  name: 'Paleoarchean',
  start: Eoarchean.end,
  end: 3200,
  hasImage: false,
  subdivisions: []
}

export const Mesoarchean: TimelineDivision = {
  type: DivisionType.era,
  name: 'Mesoarchean',
  start: Paleoarchean.end,
  end: 2800,
  hasImage: false,
  subdivisions: []
}

export const Neoarchean: TimelineDivision = {
  type: DivisionType.era,
  name: 'Neoarchean',
  start: Mesoarchean.end,
  end: 2500,
  hasImage: false,
  subdivisions: []
}

export const Paleoproterozoic: TimelineDivision = {
  type: DivisionType.era,
  name: 'Paleoproterozoic',
  start: Neoarchean.end,
  end: 1600,
  hasImage: true,
  subdivisions: [Period.Siderian, Period.Rhyacian, Period.Orosirian, Period.Statherian]
}

export const Mesoproterozoic: TimelineDivision = {
  type: DivisionType.era,
  name: 'Mesoproterozoic',
  start: Paleoproterozoic.end,
  end: 1000,
  hasImage: true,
  subdivisions: [Period.Calymmian, Period.Ectasian, Period.Stenian]
}

export const Neoproterozoic: TimelineDivision = {
  type: DivisionType.era,
  name: 'Neoproterozoic',
  start: Mesoproterozoic.end,
  end: 538,
  hasImage: true,
  subdivisions: [Period.Tonian, Period.Cryogenian, Period.Ediacaran]
}

export const Paleozoic: TimelineDivision = {
  type: DivisionType.era,
  name: 'Paleozoic',
  start: Neoproterozoic.end,
  end: 252,
  hasImage: true,
  subdivisions: [
    Period.Cambrian, Period.Ordovician, Period.Silurian,
    Period.Devonian, Period.Carboniferous, Period.Permian
  ]
}

export const Mesozoic: TimelineDivision = {
  type: DivisionType.era,
  name: 'Mesozoic',
  start: Paleozoic.end,
  end: 66,
  hasImage: true,
  subdivisions: [Period.Triassic, Period.Jurassic, Period.Cretaceous]
}

export const Cenozoic: TimelineDivision = {
  type: DivisionType.era,
  name: 'Cenozoic',
  start: Mesozoic.end,
  end: 0,
  hasImage: true,
  subdivisions: [Period.Paleogene, Period.Neogene, Period.Quaternary]
}