import { DivisionType } from '../division-type.enum';
import { TimelineDivision } from '../../types/timeline-division.interface';
import * as Period from './periods';

export const Eoarchean: TimelineDivision = {
  type: DivisionType.era,
  name: 'Eoarchean',
  start: 4000,
  end: 3600,
  subdivisions: [],
  description: [
    'The era begins with a large number of asteroid and comet impacts which presumably occur between 4.1 and 3.8 billion years ago, known as the <b>Late Heavy Bombardment</b>.',
    'The atmosphere is cooled to milder temperatures, although remains thick (with a surface pressure exceeding 10 modern atmospheres) and orange in color due to high concentrations of methane, ammonia, and carbon dioxide.',
    'Most of the planet\'s surface is covered by water, with volcanoes and volcanic islands present. The oceans are green and acidic due to dissolved iron compounds.',
    'Early microbial <b>life</b> possibly appears, utilizing methane as its primary source of energy.'
  ]
}

export const Paleoarchean: TimelineDivision = {
  type: DivisionType.era,
  name: 'Paleoarchean',
  start: Eoarchean.end,
  end: 3200,
  subdivisions: [],
  description: [
    'The Earth\'s <b>magnetic field</b> finally establishes around 3.5 billion years ago, preventing the planet\'s atmosphere from getting stripped away by the solar wind.',
    'Continent formation begins, with increasingly larger land masses emerging from the oceans and forming <b>Vaalbara</b>, the first supercontinent.',
    'The earliest confirmed microbial <b>life</b> appears, evidenced by microfossils of organisms found in rocks 3.465 billion years old.',
    'First forms of <b>cyanobacteria</b> capable of using <b>photosynthesis</b>, a process that converts the energy of light into chemical energy, possibly appear.'
  ]
}

export const Mesoarchean: TimelineDivision = {
  type: DivisionType.era,
  name: 'Mesoarchean',
  start: Paleoarchean.end,
  end: 2800,
  subdivisions: [],
  description: [
    'The movement of tectonic plates begins. The first supercontinent, <b>Vaalbara</b>, breaks apart. A new continent, <b>Ur</b>, emerges.',
    'Surface temperatures further decrease, remaining around 55-85 °C for most of the era. The atmosphere still contains high levels of methane and carbon dioxide. The oxygen produced by bacteria gets quickly bound as it reacts with minerals in the environment.',
    'More diverse microbial life develops. First microorganisms on land possibly appear about 3 billion years ago.',
    'The oldest known glaciation event, the <b>Pongola glaciation</b>, occurs around 2.9 billion years ago. Polar glaciers extend up to 48 degrees of latitude.'
  ]
}

export const Neoarchean: TimelineDivision = {
  type: DivisionType.era,
  name: 'Neoarchean',
  start: Mesoarchean.end,
  end: 2500,
  subdivisions: [],
  description: [
    'The movement of tectonic plates continues. A new supercontinent, <b>Kenorland</b>, forms about 2.7 billion years ago.',
    'The oceans are still green, with increased sulfur and molybdenum levels, and methane still prevails in the atmospheric composition.',
    'Multiple species of bacteria capable of oxygen-forming <b>photosynthesis</b> evolve, contributing to the rise of oxygen concentrations in the atmosphere.',
    'Microorganisms spread to the land, confirmed by 2.75 billion year old fossils. They begin breaking down rock and forming first soils.'
  ]
}

export const Paleoproterozoic: TimelineDivision = {
  type: DivisionType.era,
  name: 'Paleoproterozoic',
  start: Neoarchean.end,
  end: 1600,
  image: true,
  subdivisions: [Period.Siderian, Period.Rhyacian, Period.Orosirian, Period.Statherian],
  description: [
    'The supercontinent of <b>Kenorland</b> breaks apart roughly 2.1 billion years ago. Tectonic plates keep moving, creating a new supercontinent, <b>Columbia</b> (also known as <b>Nuna</b>), about 1.8 billion years ago. Multiple mountain ranges and continental platforms are forming.',
    'Photosynthetic microorganisms keep producing oxygen. It reacts with minerals dissolved in the water, depositing them on the ocean floor and making the water look clear. It also accumulates in the atmosphere, causing a mass extinction of anaerobic organisms for which oxygen is toxic. This is known as the <b>Great Oxidation Event</b>.',
    'Decreased atmospheric concentrations of methane and carbon dioxide lead to lower surface temperatures. The <b>Huronian glaciation</b> lasts from about 2.4 to 2.1 billion years ago. It includes multiple ice ages, with glaciers possibly covering the entire surface of the Earth. Intense volcanism eventually produces enough greenhouse gases to end the glaciation.',
    'First possible <b>eukaryotic</b> microorganisms appear, as early as about 2.1 billion years ago. Such organisms have a nucleus in their cells, unlike all previously existing <b>prokaryotic</b> species.',
    '<b>Prokaryotic</b> unicellular organisms still remain the predominant form of life, evolving and diversifying.'
  ]
}

export const Mesoproterozoic: TimelineDivision = {
  type: DivisionType.era,
  name: 'Mesoproterozoic',
  start: Paleoproterozoic.end,
  end: 1000,
  image: true,
  subdivisions: [Period.Calymmian, Period.Ectasian, Period.Stenian],
  description: [
    'The supercontinent of <b>Columbia</b> (<b>Nuna</b>) breaks apart between 1.5 and 1.35 billion years ago. Tectonic plates keep moving, leading to the formation of a new supercontinent, <b>Rodinia</b>, about 1.13 billion years ago. The Earth\'s crust thickens, land masses grow in size.',
    'The so-called <b>Boring Billion</b> continues: atmospheric composition and climate remain stable, without significant fluctuations. No glaciations occur during this era.',
    'Microorganisms become structurally more complex. First confirmed <b>eukaryotic</b> species (which have a nucleus in their cells) appear in the fossil record.',
    'First <b>multicellular</b> organisms appear around 1.2 billion years ago, or possibly earlier. First confirmed organisms using <b>sexual reproduction</b> appear, at least 1.05 billion years ago.',
    'New types of life, such as <b>fungi</b> in the form of mold, possibly emerge by the end of this era.'
  ]
}

export const Neoproterozoic: TimelineDivision = {
  type: DivisionType.era,
  name: 'Neoproterozoic',
  start: Mesoproterozoic.end,
  end: 538,
  image: true,
  subdivisions: [Period.Tonian, Period.Cryogenian, Period.Ediacaran],
  description: [
    'The supercontinent of <b>Rodinia</b> breaks up 750-700 million years ago. A new supercontinent, <b>Pannotia</b>, exists between 630 and 570 million years ago. <b>Gondwana</b> forms 550 million years ago.',
    'The <b>Boring Billion</b> finally ends. The two most severe glaciations in the Earth\'s history occur: <b>Sturtian</b> (750-700 million years ago) and <b>Marinoan</b> (650-635 million years ago). Glaciers extend all the way to the equator, which is often referred to as the <b>Snowball Earth</b>.',
    'Temperatures rise and remain warm towards the end of the era, yet two more glaciations happen: <b>Gaskiers</b> (579 million years ago) and <b>Baykonurian</b> (547 million years ago).',
    'Life keeps evolving in the oceans. New multicellular organisms appear, including some <b>fungi</b>, filamentous green <b>algae</b>, <b>sponges</b>, worm-like marine animals, <b>jellyfish</b>, and diverse <b>Ediacaran fauna</b>.',
    'First <b>heterotrophic</b> species appear. Such organisms cannot produce their own food, consuming organic matter created by other species. <b>Plankton</b> feeds on unicellular algae and prokaryotes, ending the dominance of bacteria in the oceans.',
    'Complex marine <b>ecosystems</b> are forming, with species becoming more specialized.'
  ]
}

export const Paleozoic: TimelineDivision = {
  type: DivisionType.era,
  name: 'Paleozoic',
  start: Neoproterozoic.end,
  end: 252,
  image: true,
  subdivisions: [Period.Cambrian, Period.Ordovician, Period.Silurian, Period.Devonian, Period.Carboniferous, Period.Permian],
  description: [
    'The continents of <b>Laurentia</b> and <b>Baltica</b>, left over from the breakup of <b>Pannotia</b>, collide again to form <b>Laurussia</b> (also known as <b>Euramerica</b>), which in turn collides with <b>Gondwana</b>, assembling the new supercontinent of <b>Pangaea</b> about 336 million years ago.',
    'The climate varies significantly throughout the era, alternating between warming and cooling trends. Oxygen levels keep increasing and reach the historical maximum of about 35%.',
    'The biosphere experiences dramatic evolutionary changes. Multicellular life rapidly diversifies in the oceans (<b>Cambrian Explosion</b>) and then eventually occupies the landmasses. <b>Arthropods</b>, <b>trilobites</b>, <b>molluscs</b>, <b>fish</b>, <b>insects</b>, <b>amphibians</b>, <b>reptiles</b>, <b>tetrapods</b>, and many other groups of animals appear and become widespread.',
    '<b>Plants</b> appear on land and gradually evolve, forming extensive forests (<b>Devonian Explosion</b>) and providing more comfortable habitats for terrestrial animals.',
    'Several extinction events occur. The era ends with the <b>Permian-Triassic mass extinction</b>, the largest one in Earth\'s history. It eliminates nearly 95% of marine life and 70% of terrestrial species.'
  ]
}

export const Mesozoic: TimelineDivision = {
  type: DivisionType.era,
  name: 'Mesozoic',
  start: Paleozoic.end,
  end: 66,
  image: true,
  subdivisions: [Period.Triassic, Period.Jurassic, Period.Cretaceous],
  description: [
    'The supercontinent of <b>Pangaea</b> breaks up about 175 million years ago, splitting into <b>Laurasia</b> in the north and <b>Gondwana</b> in the south. <b>Gondwana</b> further splits into several pieces that would later become <b>Africa</b>, <b>South America</b>, <b>Antarctica</b>, and <b>Australia</b>.',
    'The climate remains generally warm. Forests grow near the poles, large arid expanses are common near the equator. Oxygen concentration in the atmosphere decreases to 20% and remains at that level.',
    'Biodiversity recovers from the <b>Permian-Triassic mass extinction</b>. The process takes up to 30 million years.',
    'Initially, <b>reptiles</b> dominate on land. <b>Dinosaurs</b> appear and rapidly diversify, becoming widespread after the <b>Triassic–Jurassic extinction</b> 201 million years ago. Some species reach over 30 meters in size, becoming the largest known terrestrial animals.',
    'First flying vertebrates evolve, such as <b>pterosaurs</b> and <b>birds</b>. First true <b>mammals</b> emerge, although remain small-sized. Some modern <b>insects</b> appear.',
    '<b>Gymnosperms</b> (seed-producing plants), such as <b>conifers</b> and <b>ferns</b>, initially dominate on land. <b>Angiosperms</b> (flowering plants) appear and become widespread across the globe by the end of the era.',
    'Aquatic life continues to flourish. Large <b>marine reptiles</b> thrive in the oceans. <b>Turtles</b> significantly diversify.',
    'The <b>Cretaceous-Paleogene extinction event</b> occurs 66 million years ago, caused by the impact of a massive asteroid. It wipes out all non-avian dinosaurs, together with most other large terrestrial and marine animals.'
  ]
}

export const Cenozoic: TimelineDivision = {
  type: DivisionType.era,
  name: 'Cenozoic',
  start: Mesozoic.end,
  end: 0,
  image: true,
  subdivisions: [Period.Paleogene, Period.Neogene, Period.Quaternary],
  description: [
    'Continents gradually take their modern shapes and positions. <b>Laurasia</b> splits into <b>North America</b>, <b>Europe</b>, and <b>Asia</b> between 66 and 30 million years ago. <b>Antarctica</b> separates from <b>Australia</b> (about 45 million years ago) and from <b>South America</b> (when exactly is unclear). Land bridges connect Africa to Eurasia (15-19 million years ago) and North America to South America (3-5 million years ago).',
    'The climate remains warm during the early Cenozoic. A cooling trend begins about 50 million years ago and continues throughout most of the era, leading to periodic glaciations (commonly known as <b>Ice Ages</b>) since about 2.5 million years ago.',
    'Early in the era, extensive <b>forests</b> cover the landmasses and grow even in the polar regions. As the planet gets cooler, the forests retreat, giving way to <b>grasslands</b> and <b>savannas</b>.',
    'Following the extinction of dinosaurs, <b>mammals</b> become the new predominant group of animals. Most of the modern terrestrial fauna appears. <b>Birds</b>, <b>insects</b>, and <b>snakes</b> also significantly diversify.',
    'Among other groups of mammals, <b>primates</b> emerge and gradually develop, leading to the evolution of <b>humans</b>. The <b>Stone Age</b> begins about 3.4 million years ago. Humans become anatomically modern about 2 million years ago. <b>Homo sapiens</b> appears about 300 thousand years ago. All <b>recorded history</b> takes place within the last 10 thousand years.',
    'The <b>Eocene-Oligocene extinction</b> occurs about 34 million years ago, affecting mostly aquatic life. Large land mammals (also called megafauna) disappear between 120 and 11 thousand years ago in a process known as the <b>Quaternary extinction</b>. Human activity causes a significant decline in biodiversity, known as the ongoing <b>Holocene extinction</b>.'
  ]
}