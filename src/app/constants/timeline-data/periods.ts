import { DivisionType } from '../division-type.enum';
import { TimelineDivision } from '../../types/timeline-division.interface';
import * as Epoch from './epochs';

export const Siderian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Siderian',
  start: 2500,
  end: 2300,
  subdivisions: [],
  description: [
    'The continent of <b>Ur</b> breaks apart roughly 2.4 billion years ago.',
    'Photosynthetic bacteria continue producing huge amounts of oxygen. It reacts with iron in the oceans, forming insoluble magnetite and hematite. Those minerals deposit on the ocean floor, creating layers of <b>banded iron formations</b>. The oceans cease to be green and get a modern look.',
    'With no remaining iron in the oceans to serve as an absorber, oxygen quickly builds up in the atmosphere. This is known as the <b>Great Oxidation Event</b>, dating back to about 2.44 billion years ago.',
    'As a result of rapidly increasing oxygen levels and decreasing methane concentrations, many species of <b>anaerobic</b> microorganisms (which use methane and to which oxygen is toxic) go extinct.',
    'About 2.4 billion years ago, the fraction of methane in the atmosphere decreases to trace levels. This causes a significant drop in surface temperatures, known as the <b>Huronian glaciation</b>. Several ice ages occur, during which almost the entire surface of the Earth is covered with ice.'
  ]
}

export const Rhyacian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Rhyacian',
  start: Siderian.end,
  end: 2050,
  subdivisions: [],
  description: [
    'Roughly 2.1 billion years ago, the supercontinent of <b>Kenorland</b> breaks apart.',
    'The <b>Huronian glaciation</b> lasts throughout most of this period, until about 2.1 billion years ago. Intense volcanic eruptions occur around the planet, producing large quantities of carbon dioxide and other greenhouse gases. This increases the temperatures and finally ends the glaciation.',
    '<b>Cyanobacteria</b> survive the glaciation and still dominate coastal areas and marine waters.',
    'First <b>eukaryotic</b> organisms possibly appear. Such organisms have a nucleus in their cells, unlike all previously existing <b>prokaryotic</b> life forms.'
  ]
}

export const Orosirian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Orosirian',
  start: Rhyacian.end,
  end: 1800,
  subdivisions: [],
  description: [
    'Intense motion of tectonic plates produces multiple mountain ranges around the planet.',
    'A new supercontinent, <b>Columbia</b> (also known as <b>Nuna</b>), is formed roughly 1.8 billion years ago, near the end of the period.',
    'Two large asteroid impacts occur: 2.023 billion years ago (produced a crater 300 km wide) and 1.85 billion years ago (produced a crater 250 km wide). These events, however, have no significant long-term consequences.',
    '<b>Prokaryotic</b> microorganisms, such as <b>cyanobacteria</b>, remain the predominant form of life.'    
  ]
}

export const Statherian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Statherian',
  start: Orosirian.end,
  end: 1600,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Columbia</b> (<b>Nuna</b>) further increases in size. New continental platforms and mountain ranges are forming.',
    'Oxygen levels in the atmosphere become relatively stable, remaining between 10% and 20% of modern values.',
    'The so-called <b>Boring Billion</b> begins, a time interval between 1.8 and 0.8 billion years ago, characterized by biospheric and climatic stability.',
    'Unicellular microorganisms keep evolving and diversifying both on land and in the oceans.'    
  ]
}

export const Calymmian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Calymmian',
  start: Statherian.end,
  end: 1400,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Columbia</b> (<b>Nuna</b>) begins to break up around 1.5 billion years ago. Shallow seas appear between landmasses.',
    'The so-called <b>Boring Billion</b> continues. Atmospheric composition and climate remain stable, without any significant fluctuations.',
    'Microorganisms gradually evolve and become structurally more complex. The oldest known fossils of possibly <b>eukaryotic</b> species belong to this period.'
  ]
}

export const Ectasian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Ectasian',
  start: Calymmian.end,
  end: 1200,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Columbia</b> (<b>Nuna</b>) breaks up completely about 1.35 billion years ago. Continents continue to drift apart and grow in size. The Earth\'s crust thickens due to the deposition of rock on top of older rock.',
    'The so-called <b>Boring Billion</b> continues. Atmospheric composition and climate remain stable, without any significant fluctuations.',
    'First confirmed <b>multicellular</b> organisms (predecessors of red and green algae) appear in the fossil record. This is also the oldest direct evidence of <b>eukaryotic</b> organisms.',
    'First microorganisms using <b>sexual reproduction</b> possibly appear, about 1.2 billion years ago.'
  ]
}

export const Stenian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Stenian',
  start: Ectasian.end,
  end: 1000,
  subdivisions: [],
  description: [
    'A new supercontinent, <b>Rodinia</b>, forms about 1.13 billion years ago. It is the largest landmass in existence up to this time, with an extensive floodplain in the center.',
    'The so-called <b>Boring Billion</b> continues. Atmospheric composition and climate remain stable, without any significant fluctuations. The concentration of oxygen in the atmosphere slightly increases.',
    'The first <b>sexually reproducing</b> organism confirmed by fossils, a species of red alga, appears around 1.05 billion years ago.',
    '<b>Stromatolites</b>, layered rock formations created by microorganisms, reach their maximum diversity in sediments of this period.',
    '<b>Fungi</b> in the form of slime molds possibly develop towards the end of this period.'
  ]
}

export const Tonian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Tonian',
  start: Stenian.end,
  end: 720,
  image: true,
  subdivisions: [],
  description: [
    'Rifts appear across the supercontinent of <b>Rodinia</b>, starting to break it apart roughly 750 million years ago and creating new shallow seas.',
    'Multiple species of filamentous and seaweed-like <b>green algae</b> become widespread and thrive on the seafloor in shallow waters.',
    '<b>Sponges</b> appear in the oceans, found in fossils about 760 million years old. First confirmed species of <b>fungi</b> appear about 890 million years ago.',
    'First worm-like marine animals evolve, reaching up to several centimeters in size, confirmed by fossils 840-740 million years old.'
  ]
}

export const Cryogenian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Cryogenian',
  start: Tonian.end,
  end: 635,
  image: true,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Rodinia</b> finally breaks up about 700 million years ago. Landmasses become clustered around the South Pole.',
    'The two most severe glaciations in the Earth\'s history occur: <b>Sturtian</b> (750-700 million years ago) and <b>Marinoan</b> (650-635 million years ago). Glaciers extend and contract in a series of rhythmic pulses, possibly reaching as far as the equator. Such state of the climate is often called the <b>Snowball Earth</b>. What exactly caused the glaciations is still unclear.',
    'Life retreats into the oceans, unable to survive the harsh conditions on land. However, the evolution of marine species continues uninterrupted.',
    'First <b>heterotrophic</b> organisms, such as testate amoebae, appear. Such organisms cannot produce their own food, taking nutrition from organic matter created by other species.',
    'Heterotrophic <b>plankton</b> possibly develops. It feeds on unicellular algae and prokaryotes, ending the dominance of bacteria in the oceans.'
  ]
}

export const Ediacaran: TimelineDivision = {
  type: DivisionType.period,
  name: 'Ediacaran',
  start: Cryogenian.end,
  end: 538,
  image: true,
  subdivisions: [],
  description: [
    'A new supercontinent, <b>Pannotia</b>, forms around 630 million years ago and breaks up 570 million years ago. The landmass of <b>Gondwana</b> forms 550 million years ago.',
    'The climate remains unstable early in the period. The <b>Gaskiers glaciation</b> occurs about 579 million years ago. It is followed by warm and humid climate during the second half of the Ediacaran. Another cooling event, the <b>Baykonurian glaciation</b>, begins about 547 million years ago.',
    'A variety of multicellular life forms evolve in the oceans, including new species of <b>fungi</b>, <b>algae</b>, <b>sponges</b>, <b>sea fans</b>, <b>jellyfish</b>, and other macroscopic organisms.',
    'Complex <b>ecosystems</b> are forming, with species becoming more specialized and engaging in more inter-species interactions.',
    'Most of the Ediacaran fauna does not survive into later periods. It is still disputed whether this was caused by a mass extinction event or the species were naturally replaced by more adaptable organisms.'
  ]
}

export const Cambrian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Cambrian',
  start: Ediacaran.end,
  end: 485,
  image: true,
  subdivisions: [],
  description: [
    'The remnants of <b>Pannotia</b> (the continents of <b>Laurentia</b>, <b>Baltica</b>, and <b>Siberia</b>) continue to drift apart, forming warm shallow seas and tidal flats.',
    'Polar ice caps melt in the early Cambrian, and the climate keeps warming. Atmospheric composition remains relatively stable, with about 16% of oxygen and 4200-6000 ppm of carbon dioxide.',
    'The diversity of oceanic life increases dramatically. Complex multicellular organisms (such as <b>arthropods</b>, <b>trilobites</b>, <b>molluscs</b>, first <b>vertebrates</b>, <b>burrowing animals</b>) appear and become widespread. First <b>coral reefs</b> possibly form. This rapid burst of biospheric development is known as the <b>Cambrian Explosion</b>.',
    'Life on land remains mostly limited to microbial ecosystems, possibly with <b>algae</b> and <b>lichens</b> present. First freshwater ecosystems are forming.',
    'Two extinction events occur: <b>End-Botomian</b> (517 million years ago) and <b>Dresbachian</b> (502 million years ago). Each of the events affects about 40-50% of marine species. The causes are still disputed.',
    'About 488 million years ago, the <b>Cambrian–Ordovician extinction event</b> eliminates many species of brachiopods (aquatic animals with hard shells) and severely reduces the number of trilobites.'
  ]
}

export const Ordovician: TimelineDivision = {
  type: DivisionType.period,
  name: 'Ordovician',
  start: Cambrian.end,
  end: 444,
  image: true,
  subdivisions: [],
  description: [
    'The warming trend of the climate reverses, and the planet is gradually cooling. Polar ice caps are forming once again. The <b>Late Ordovician glaciation</b> happens near the end of the period.',
    'Oceanic life continues to flourish, with <b>molluscs</b> and <b>arthropods</b> being the predominant groups. It expands considerably during the <b>Great Ordovician Biodiversification Event</b>, with multiple species of <b>fish</b> evolving.',
    'First confirmed <b>plants</b> that use <b>spores</b> for reproduction appear on land. Some fungi reach the size of 15 centimeters. First <b>insects</b> appear.',
    'The <b>Ordovician meteor event</b> occurs about 467 million years ago, with a brief dramatic increase in the rate at which meteorites fall to Earth. The causes of this event are unclear.',
    'The <b>Late Ordovician mass extinction</b> occurs roughly 443 million years ago. It eliminates nearly 85% of marine species, becoming the second-largest known extinction event in the Earth\'s history.'
  ]
}

export const Silurian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Silurian',
  start: Ordovician.end,
  end: 419,
  image: true,
  subdivisions: [],
  description: [
    '<b>Gondwana</b> covers most of the southern hemisphere. Smaller landmasses (<b>Laurentia</b>, <b>Baltica</b>, <b>Siberia</b>, and <b>Avalonia</b>) drift together near the equator. A large ocean occupies most of the northern hemisphere. ',
    'The climate becomes warmer, polar ice caps retreat. However, the temperatures undergo significant short-term fluctuations. Oxygen levels in the atmosphere slightly increase and remain close to 19%.',
    'Marine life recovers from the <b>Late Ordovician mass extinction</b>. Multiple species of <b>jawed fish</b> and <b>bony fish</b> appear in the oceans. Sea scorpions reach several meters in length.',
    'First <b>vascular plants</b> (which have specialized tissues for conducting water and minerals) evolve from more primitive land plants. Multiple new species of land fungi emerge.',
    'First <b>terrestrial animals</b> (living exclusively on land) appear. Three groups of <b>arthropods</b> become fully terrestrialized: <b>myriapods</b> (centipede-like animals), <b>arachnids</b> (spider-like animals), and <b>hexapods</b> (six-legged animals).'
  ]
}

export const Devonian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Devonian',
  start: Silurian.end,
  end: 359,
  image: true,
  subdivisions: [],
  description: [
    '<b>Gondwana</b> remains the largest landmass, located entirely within the southern hemisphere. The continent of <b>Laurussia</b> (also known as <b>Euramerica</b>) forms northwest of Gondwana through the collision of <b>Laurentia</b> and <b>Baltica</b>.',
    'The climate is relatively warm and arid, cooling towards the middle of the period and warming again towards its end. Average surface temperatures of the ocean remain close to 30 °C. Oxygen levels in the atmosphere increase from 20% to 27%.',
    '<b>Fish</b> reaches substantial diversity and dominates aquatic environments. <b>Trilobites</b> and <b>crinoids</b> remain abundant, first <b>ammonites</b> appear.',
    'Several groups of land plants evolve to grow leaves and roots. First <b>trees</b> and <b>ferns</b> appear. Plants spread rapidly across continents, forming extensive forests. This is sometimes referred to as the <b>Devonian Explosion</b>.',
    'First <b>tetrapods</b> (the ancestors of four-legged animals) appear in the fossil record. They begin adapting to walking on land, as their strong fins gradually evolve into legs.',
    'The <b>Late Devonian extinction</b>, a series of extinction events between 375 and 372 million years ago, significantly impacts marine life, killing off many species of animals living in warm shallow waters.',
    'Another mass extinction, the <b>Hangenberg event</b>, occurs 359 million years ago, affecting mostly aquatic life and coral reefs.'
  ]
}

export const Carboniferous: TimelineDivision = {
  type: DivisionType.period,
  name: 'Carboniferous',
  start: Devonian.end,
  end: 299,
  image: true,
  subdivisions: [],
  description: [
    '<b>Gondwana</b> collides with <b>Laurussia</b> (<b>Euramerica</b>), forming the supercontinent of <b>Pangaea</b> about 336 million years ago.',
    'The climate is warm early in the period. Trees keep consuming carbon dioxide and producing oxygen. This increases the atmospheric oxygen levels to 35% and drops the carbon dioxide levels roughly 8 times, causing gradual cooling of the planet.',
    '<b>Tropical swamps</b> and <b>rainforests</b> cover large parts of the continents. Fallen trees pile up, leading to the formation of coal.',
    '<b>Tetrapods</b> (four-legged vertebrates) significantly diversify, with the appearance of lizard-like, snake-like, and crocodile-like animals. <b>Amphibians</b> and <b>reptiles</b> become widespread. <b>Winged insects</b> appear, with some species reaching 70 cm in size.',
    '<b>Invertebrates</b> continue to flourish in the oceans, heavily represented in the fossil record. A wide variety of <b>sharks</b> appear. <b>Freshwater fish</b> also becomes abundant.',
    'Around 305 million years ago, decreased global temperatures cause significant changes in terrestrial ecosystems. This event is known as the <b>Carboniferous Rainforest Collapse</b>.'
  ]
}

export const Permian: TimelineDivision = {
  type: DivisionType.period,
  name: 'Permian',
  start: Carboniferous.end,
  end: 252,
  image: true,
  subdivisions: [],
  description: [
    'All major landmasses are collected into a single supercontinent of <b>Pangaea</b> that spans from the equator to the poles. It experiences continental climate with extreme variations of heat and cold. Deserts cover large areas.',
    'Global temperatures remain relatively low at the beginning of the period, with polar ice caps present. Two major warmings occur: the <b>Artinskian Warming Event</b> (287 million years ago), and the <b>Emeishan Thermal Excursion</b> (260 million years ago). The climate becomes warm and dry.',
    '<b>Amphibians</b> become less common, replaced by <b>synapsids</b> (mammal-like reptiles), including <b>therapsids</b> (ancestors and relatives of modern mammals). Multiple new species of insects appear. Marine life experiences rather little changes compared to previous periods.',
    'Two extinction events occur: <b>Olson\'s Extinction</b> (273 million years ago) and the <b>Capitanian mass extinction</b> (262-259 million years ago). Although some ecosystems are significantly impacted, the biodiversity quickly recovers.',
    'The <b>Permian-Triassic extinction event</b> (also known as the <b>Great Dying</b>) occurs 252 million years ago and becomes the largest mass extinction in Earth\'s history. It eliminates up to 95% of marine species and 70% of all land organisms. Possible causes include the eruption of the Siberian Traps, an asteroid impact, or a combination of factors. '
  ]
}

export const Triassic: TimelineDivision = {
  type: DivisionType.period,
  name: 'Triassic',
  start: Permian.end,
  end: 201,
  image: true,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Pangaea</b> remains intact, drifting slowly northward.',
    'The climate is generally hot and dry, with deserts near the equator and temperate forests in the polar regions. Oxygen levels are continually decreasing, reaching 20%.',
    'Biodiversity gradually recovers from the <b>Permian-Triassic mass extinction</b>. The process takes 10 to 30 million years.',
    '<b>Reptiles</b> dominate on land. First <b>dinosaurs</b> appear between 245 and 233 million years ago. <b>Pterosaurs</b> (flying reptiles, first flying vertebrates) evolve about 228 million years ago. First true <b>mammals</b> appear and replace previously common mammal-like reptiles.',
    '<b>Sharks</b> dominate freshwater and marine environments. <b>Ray-finned fishes</b> rapidly diversify. Ancestors of modern <b>amphibians</b>, such as frogs, appear.',
    'The period ends with another mass extinction, the <b>Triassic-Jurassic extinction event</b> 201 million years ago. It eliminates nearly 25-30% of marine life (severely affecting invertebrates and marine reptiles) and multiple groups of land animals.'
  ]
}

export const Jurassic: TimelineDivision = {
  type: DivisionType.period,
  name: 'Jurassic',
  start: Triassic.end,
  end: 145,
  image: true,
  subdivisions: [],
  description: [
    'Rifts appear on the supercontinent of <b>Pangaea</b>, splitting it into two separate landmasses: <b>Laurasia</b> in the north and <b>Gondwana</b> in the south.',
    'The climate remains warm, with no ice caps at the poles. Several brief cooling intervals occur. Forests grow in the polar regions, large arid expanses are common at lower latitudes. Oxygen levels remain stable near 20%.',
    '<b>Conifers</b> and <b>ferns</b> remain the most common groups of land plants. Ginkgo-like trees are also widespread.',
    '<b>Dinosaurs</b> diversify and fill the ecological niches vacated by the Triassic-Jurassic extinction, establishing as the predominant group of land animals. Some species reach over 30 meters in length, becoming the largest known terrestrial animals.',
    'Ancestors of birds appear, evolving from theropods (a group of dinosaur species). Ancestors of crocodiles make the transition from terrestrial to aquatic life.',
    'Large <b>marine reptiles</b>, such as ichthyosaurs and plesiosaurs, become abundant in the oceans. <b>Turtles</b> significantly diversify.',
    'The <b>Toarcian Oceanic Anoxic Event</b> occurs about 183 million years ago. Reduced oxygen levels in the oceans cause the extinction of some marine invertebrates, although have rather little effect on reptiles.'
  ]
}

export const Cretaceous: TimelineDivision = {
  type: DivisionType.period,
  name: 'Cretaceous',
  start: Jurassic.end,
  end: 66,
  image: true,
  subdivisions: [],
  description: [
    '<b>Gondwana</b> splits into several pieces that would later become the modern continents: <b>Africa</b> separates from the connected landmasses of <b>South America</b>, <b>Antarctica</b>, and <b>Australia</b>. <b>Laurasia</b> still remains largely intact in the northern hemisphere.',
    'The climate undergoes three major phases: warm and dry early in the period, warm and wet 125 to 85 million years ago, cool and dry near the end of the period.',
    '<b>Flowering plants</b> (angiosperms) appear. They rapidly spread and diversify, becoming the dominant group of terrestrial plants by the end of the Cretaceous.',
    '<b>Dinosaurs</b> continue to dominate on land. New groups of small-sized <b>mammals</b> and <b>birds</b> emerge. Some modern <b>insects</b> (ants, termites, moths, grasshoppers) appear.',
    'Large marine reptiles, turtles, sharks, ammonites, starfish, rays, and other aquatic animals continue to flourish in the oceans.',    
    'The <b>Cretaceous-Paleogene extinction event</b> occurs 66 million years ago, caused by the impact of a massive asteroid 10-15 km wide. It wipes out all non-avian dinosaurs, most other tetrapods (four-legged vertebrates) and large marine animals.'
  ]
}

export const Paleogene: TimelineDivision = {
  type: DivisionType.period,
  name: 'Paleogene',
  start: Cretaceous.end,
  end: 23,
  image: true,
  subdivisions: [Epoch.Paleocene, Epoch.Eocene, Epoch.Oligocene],
  description: [
    'Continents begin to resemble their modern shapes. <b>Laurasia</b> breaks up, forming <b>North America</b>, <b>Europe</b>, and <b>Asia</b>. <b>South America</b> and <b>Australia</b> split from <b>Antarctica</b>.',
    'The climate keeps gradually warming until it reaches the <b>Eocene Optimum</b> about 49 million years ago, then reverses to a cooling trend. Temperatures remain significantly lower between 33.5 and 25 million years ago.',
    'In the early Paleogene, dense <b>evergreen forests</b> cover the landmasses. As the cooling begins, <b>temperate forests</b> and <b>open plains</b> become more common. An ice sheet begins to form in Antarctica about 33 million years ago and covers the entire continent by the end of the period.',
    '<b>Mammals</b> rapidly diversify and fill the ecological niches formerly taken by dinosaurs. Many groups of modern mammals appear (horses, elephants, rhinoceroses, camels, deer, dogs, bears, weasels, raccoons, bats, primates). Most creatures remain small, however some large herbivores (plant-eating animals) and large terrestrial predators also evolve.',
    'In the oceans, <b>ray-finned fish</b> becomes much more common. New species of <b>whales</b> appear. Marine life gets hit by the <b>Eocene-Oligocene extinction</b> (also known as the <b>Grande Coupure</b>) about 34 million years ago. The subsequent cooling also reduces aquatic biodiversity.'
  ]
}

export const Neogene: TimelineDivision = {
  type: DivisionType.period,
  name: 'Neogene',
  start: Paleogene.end,
  end: 2.58,
  image: true,
  subdivisions: [Epoch.Miocene, Epoch.Pliocene],
  description: [
    'Landmasses continue to drift towards their modern positions. <b>Africa</b> collides with <b>Europe</b>, forming the Mediterranean Sea. A land bridge establishes between <b>North America</b> and <b>South America</b>.',
    'A rapid cooling occurs about 23 million years ago. Temperatures rise between 21 and 15 million years ago, then a strong cooling trend establishes again and continues throughout the period.',
    '<b>Grassland ecosystems</b> and <b>temperate forests</b> become widespread. <b>Tundra</b> covers large areas at high latitudes. Tropical forests exist only near the equator. <b>Kelp forests</b> spread in shallow seas at low latitudes.',
    'Land <b>mammals</b> keep evolving and taking their modern shapes. Many groups of modern <b>birds</b> (ducks, owls, cockatoos, crows) and <b>snakes</b> appear. <b>Whales</b> reach their peak diversity, new large-sized <b>sharks</b> evolve.',
    'Multiple species of <b>apes</b> appear and spread across Africa and Eurasia. <b>Hominins</b> (the ancestors of modern humans) develop more complex brain and the ability to walk on two legs. First stone tools are made about 3.4 million years ago, marking the beginning of the <b>Stone Age</b>.'
  ]
}

export const Quaternary: TimelineDivision = {
  type: DivisionType.period,
  name: 'Quaternary',
  start: Neogene.end,
  end: 0,
  image: true,
  subdivisions: [Epoch.Pleistocene, Epoch.Holocene],
  description: [
    'Continents remain essentially near their modern positions, moving no more than 100 kilometers since the beginning of the period.',
    'The climate is marked by repeated cycles of glaciation, commonly known as <b>Ice Ages</b>. Continental ice sheets grow and retreat every 40-100 thousand years. Sea level drops during colder phases and rises during warmer phases, with an amplitude of about 100-120 meters.',
    'Flora and fauna are mostly similar to the modern state. Many species retreat southward with each cold phase and spread to higher latitudes during warm phases of the climate.',
    'Large land mammals (such as mammoth, woolly rhinoceros, saber-toothed cat) remain common for most of the period. They disappear between 120 and 11 thousand years ago in a process known as the <b>Quaternary extinction</b>.',
    'Anatomically modern <b>humans</b> appear (<b>Homo erectus</b> about 2 million years ago, <b>Homo sapiens</b> about 300 thousand years ago) and spread from Africa to other continents.',
    'All recorded <b>human history</b> takes place within the last 10 thousand years. With the development of agriculture, humans establish permanent settlements and form ancient civilizations. As a result of gradual scientific and technological progress, the human civilization becomes global.',
    'Human activity causes a significant decline in biodiversity, known as the <b>Holocene extinction</b>. Many species of bacteria, fungi, plants and animals disappear. This process is ongoing.'
  ]
}
