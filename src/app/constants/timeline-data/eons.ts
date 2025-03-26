import { DivisionType } from '../division-type.enum';
import { TimelineDivision } from '../../types/timeline-division.interface';
import * as Era from './eras';

export const Hadean: TimelineDivision = {
  type: DivisionType.eon,
  name: 'Hadean',
  start: 4567,
  end: 4000,
  subdivisions: [],
  image: true,
  description: [
    'The beginning of the Hadean is defined by the age of the oldest known solid material in the Solar System, found in meteorites and measured at 4.567 billion years old.',
    'The <b>Earth</b> forms about 4.54 billion years ago from an <b>accretion disk</b>, a cloud of gas and dust left over from the formation of the Sun.',
    'The <b>Moon</b> forms tens of millions of years after the Earth\'s formation. According to the <b>impact hypothesis</b>, a large stellar body struck the Earth with a glancing blow, causing a portion of its material to be ejected into orbit and forming the Moon.',
    'Initially, the Earth is molten due to frequent collisions with asteroids. Later, the planet\'s outer layer cools down and forms a solid crust. Gases form the atmosphere, and water condenses on the rocky surface.',
    'The initial heavy atmosphere consists mostly of carbon dioxide, has a surface temperature exceeding 200 °C and an atmospheric pressure of more than 25 modern atmospheres.',
    'In the late Hadean, most of the planet\'s surface is covered by oceans. Water remains liquid at temperatures above 100 °C due to the high atmospheric pressure. Continents or islands may exist, but they occupy a fairly small area.',
    'Between 4.1 and 3.8 billion years ago, numerous asteroid impacts occur, causing significant changes to the surface environment. This event is usually referred to as the <b>Late Heavy Bombardment</b>.',
    'Since very little evidence has survived from the Hadean, geophysical models remain controversial and may change with new discoveries.'
  ]
}

export const Archean: TimelineDivision = {
  type: DivisionType.eon,
  name: 'Archean',
  start: Hadean.end,
  end: 2500,
  image: true,
  subdivisions: [Era.Eoarchean, Era.Paleoarchean, Era.Mesoarchean, Era.Neoarchean],
  description: [
    'The Earth\'s <b>magnetic field</b> finally forms about 3.5 billion years ago. It protects the planet from the solar wind and stabilizes the atmosphere.',
    'The movement of tectonic plates begins. The first supercontinent, <b>Vaalbara</b>, emerges 3.6 billion years ago and breaks up 2.8 billion years ago. The continent of <b>Ur</b> forms, around 2.8 billion years ago. The second supercontinent, <b>Kenorland</b>, forms 2.7 billion years ago.',
    'The planet is cooled to milder surface temperatures of about 55-85 °C. The atmosphere is orange, with high concentrations of methane and carbon dioxide. The oceans are green and acidic due to dissolved minerals.',
    'Microbial <b>life</b> appears in the oceans, as early as 3.77 billion years ago, and eventually spreads to the continents. Microorganisms break down rock, creating soils.',
    '<b>Cyanobacteria</b> evolve to use <b>photosynthesis</b> to convert the energy of sunlight into chemical energy, producing large amounts of oxygen. However, most of the oxygen is quickly bound as it reacts with minerals in the environment.',
    'The <b>Pongola glaciation</b>, the oldest known glaciation event, occurs closer to the end of the eon, about 2.9 billion years ago.'
  ]
}

export const Proterozoic: TimelineDivision = {
  type: DivisionType.eon,
  name: 'Proterozoic',
  start: Archean.end,
  end: 538,
  image: true,
  subdivisions: [Era.Paleoproterozoic, Era.Mesoproterozoic, Era.Neoproterozoic],
  description: [
    'Tectonic plates continue to drift. Supercontinents are forming and breaking up: <b>Kenorland</b> breaks apart roughly 2.1 billion years ago, <b>Columbia</b> (<b>Nuna</b>) exists between 1.8 and 1.35 billion years ago, <b>Rodinia</b> between 1.13 and 0.7 billion years ago, <b>Pannotia</b> between 630 and 570 million years ago. <b>Gondwana</b> forms 550 million years ago.',
    'Microorganisms keep producing oxygen. It reacts with minerals dissolved in the oceans, turning the water clear. It also builds up in the atmosphere, causing a mass extinction of <b>anaerobic</b> organisms for which oxygen is toxic. This is known as the <b>Great Oxidation Event</b> (2.4 to 2.0 billion years ago).',
    'Decreased concentrations of greenhouse gases trigger the <b>Huronian glaciation</b> (2.4 to 2.1 billion years ago). The climate stabilizes 1.8 billion years ago and remains almost unchanged for a billion years (the so-called <b>Boring Billion</b>). Severe glaciations occur between 750 and 635 million years ago, with glaciers reaching the equator (<b>Snowball Earth</b>). Warm and humid climate establishes again near the end of the eon.',
    'Unicellular <b>prokaryotic</b> organisms, such as cyanobacteria, remain the predominant form of life during most of the eon, evolving and diversifying.',
    '<b>Eukaryotic</b> organisms (which have a nucleus in their cells) appear, possibly around 2.1 billion years ago. First <b>multicellular</b> organisms develop about 1.2 billion years ago. <b>Sexual reproduction</b> emerges, first confirmed around 1.05 billion years ago.',
    '<b>Heterotrophic</b> organisms (which cannot produce their own food and rely on the existence of other species) appear and become widespread. Complex <b>ecosystems</b> are forming in the oceans near the end of the eon.'
  ]
}

export const Phanerozoic: TimelineDivision = {
  type: DivisionType.eon,
  name: 'Phanerozoic',
  start: Proterozoic.end,
  end: 0,
  image: true,
  subdivisions: [Era.Paleozoic, Era.Mesozoic, Era.Cenozoic],
  description: [
    '<b>Gondwana</b> collides with smaller landmasses, forming the supercontinent of <b>Pangaea</b> about 336 million years ago. It splits again about 175 million years ago into <b>Laurasia</b> in the north and <b>Gondwana</b> in the south. Those two landmasses further break up, resulting in the formation of modern continents.',
    'Most of the evolution of complex life happens during this eon. It begins with a rapid diversification of marine species about 540-520 million years ago, known as the <b>Cambrian Explosion</b>. Multicellular life flourishes in the oceans and eventually spreads to the land, forming terrestrial ecosystems. <b>Dinosaurs</b> appear 245-233 million years ago and dominate until 66 million years ago. <b>Mammals</b> take their place and thrive until modern times.',
    'Multiple extinction events occur. The most significant are the <b>Permian-Triassic mass extinction</b> (which eliminates nearly 95% of marine life and 70% of terrestrial species 252 million years ago) and the famous <b>Cretaceous-Paleogene extinction</b> (which wipes out dinosaurs and most other large animals 66 million years ago).',
    'Among other groups of mammals, <b>primates</b> emerge about 55 million years ago and gradually develop, leading to the evolution of <b>humans</b>. The <b>Stone Age</b> begins about 3.4 million years ago. Humans become anatomically modern about 2 million years ago. <b>Homo sapiens</b> appears about 300 thousand years ago.',
    'All recorded <b>human history</b> takes place within the last 10 thousand years, less than 0.002% of the eon. Humans develop agriculture, establish permanent settlements, advance complex science, and form a global civilization.'
  ]
}