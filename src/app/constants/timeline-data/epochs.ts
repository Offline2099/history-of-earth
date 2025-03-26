import { DivisionType } from '../division-type.enum';
import { TimelineDivision } from '../../types/timeline-division.interface';

export const Paleocene: TimelineDivision = {
  type: DivisionType.epoch,
  name: 'Paleocene',
  start: 66,
  end: 56,
  image: true,
  subdivisions: [],
  description: [
    'The landmass of <b>Laurasia</b> breaks apart (forming <b>North America</b>, <b>Europe</b>, and <b>Asia</b>), although the continents are still connected via land bridges. <b>South America</b>, <b>Antarctica</b>, and <b>Australia</b> are also not fully separated yet.',
    'The climate is warm and humid, with no permanent ice caps near the poles. Global average temperatures remain around 24-25 °C.',
    'Continents are covered with dense tropical and subtropical <b>forests</b>, populated mainly by small creatures. Many new species of <b>fruit-bearing plants</b> appear.',
    '<b>Mammals</b> rapidly diversify and fill the ecological niches vacated by the Cretaceous-Paleogene extinction. The earliest <b>placental</b> and <b>marsupial</b> mammals appear. <b>Birds</b> and <b>insects</b> also diversify.',
    'Various species of <b>ray-finned fish</b> become much more common in the oceans and increase in size. Marine invertebrates eventually recover to their former diversity, though it takes about 7 million years.', 
    'The end of the epoch is marked by the <b>Paleocene-Eocene Thermal Maximum</b>, a major climatic event in which a massive amount of carbon is released into the atmosphere, causing a brief spike in global temperatures.'
  ]
}

export const Eocene: TimelineDivision = {
  type: DivisionType.epoch,
  name: 'Eocene',
  start: Paleocene.end,
  end: 34,
  image: true,
  subdivisions: [],
  description: [
    'Continents continue to drift towards their modern positions. <b>Australia</b> splits from <b>Antarctica</b> about 45 million years ago.',
    'The climate keeps warming until it reaches the <b>Eocene Optimum</b> about 49 million years ago, then reverses to a cooling trend. Sea levels reach their maximum, up to 150 m higher than today.',
    'Tropical flora, such as palm trees, grows in the polar regions. Warm temperate forests cover Antarctica. As the cooling begins, <b>deciduous trees</b> (those which seasonally shed leaves) become more common and overtake evergreen tropical species.',
    'Many groups of modern <b>mammals</b> appear (horses, elephants, bats, primates). Although the vast majority of creatures remain small, some groups of <b>herbivorous megafauna</b> (large plant-eating animals) and large terrestrial predators evolve. <b>Whales</b> diversify in the oceans.',
    'The epoch ends with the <b>Eocene–Oligocene extinction event</b> (also known as the <b>Grande Coupure</b>), affecting mostly marine life and aquatic species.'
  ]
}

export const Oligocene: TimelineDivision = {
  type: DivisionType.epoch,
  name: 'Oligocene',
  start: Eocene.end,
  end: 23,
  image: true,
  subdivisions: [],
  description: [
    'The sea between <b>Europe</b> and <b>Asia</b> disappears, and a persistent land connection links the two continents together. <b>South America</b> probably separates from <b>Antarctica</b> (the exact timing is disputed).',
    'A rapid cooling occurs about 33.5 million years ago. An ice sheet forms in Antarctica and continues to grow until it covers the entire continent. Sea level drops by 105 meters. The climate remains relatively cold until about 25 million years ago, when it temporarily becomes warmer.',
    'Tropical and subtropical forests recede, getting replaced by temperate forests. Open plains and deserts become more common. <b>Grasses</b> and <b>flowering plants</b> expand their reach.',
    'Modern groups of <b>mammals</b> (horses, rhinoceroses, camels, deer, dogs, bears, weasels, raccoons) diversify and replace previously dominant groups, such as creodonts. The largest known land mammals, such as Paraceratherium (reaching the weight of 15-20 tons), appear in Eurasia.',
    'Many groups of <b>marine snails</b> and <b>clams</b> become extinct due to the cooling, and the overall diversity of marine life diminishes. However, some new species of <b>whales</b> and <b>sharks</b> evolve.'
  ]
}

export const Miocene: TimelineDivision = {
  type: DivisionType.epoch,
  name: 'Miocene',
  start: Oligocene.end,
  end: 5.33,
  image: true,
  subdivisions: [],
  description: [
    '<b>Africa</b> collides with <b>Europe</b>, forming the Mediterranean Sea and allowing an interchange of its fauna with <b>Eurasia</b>.',
    'The epoch begins with a rapid cooling about 23 million years ago. Temperatures rise between 21 and 15 million years ago, then drop sharply once again and continue to decrease.',
    '<b>Grassland ecosystems</b> further expand, providing habitats for grazing animals (horses, deer, camels, rhinoceroses, hippopotamuses) pursued by large predators. Many groups of modern <b>birds</b> appear (ducks, owls, cockatoos, crows). <b>Snakes</b> significantly diversify.',
    'Multiple species of <b>apes</b> emerge and spread across Africa and Eurasia. First <b>hominins</b> (apes capable of walking on two legs) appear.',
    '<b>Kelp forests</b> spread in shallow seas, creating a new comfortable environment for fish and invertebrates. <b>Whales</b> reach their peak diversity in the oceans. New species of large-sized <b>sharks</b> appear.',
    'Between 14.8 and 14.5 million years ago, many terrestrial and aquatic species become extinct due to rapid changes in global climate. This event is known as the <b>Middle Miocene disruption</b>.'
  ]
}

export const Pliocene: TimelineDivision = {
  type: DivisionType.epoch,
  name: 'Pliocene',
  start: Miocene.end,
  end: 2.58,
  image: true,
  subdivisions: [],
  description: [
    'A land bridge establishes between <b>North America</b> and <b>South America</b>. It allows an interchange of fauna between the two continents and significantly alters the pattern of oceanic currents.',
    'The climate is gradually cooling, although still remains slightly warmer than modern. Sea level remains about 25 meters higher than today. An ice sheet forms over Greenland about 3 million years ago.',
    '<b>Deciduous forests</b> (comprised of plants that shed leaves seasonally) and <b>grasslands</b> become more common. <b>Tundra</b> covers large areas at high latitudes. Tropical forests are limited to a narrow band near the equator.',
    'Both marine and continental faunas become more similar to modern, yet present-day animals still live side by side with many prehistoric species.',
    'Ancestors of <b>humans</b> continue to evolve, developing a more complex brain and the ability to walk consistently on two legs. First stone tools appear about 3.4 million years ago, marking the beginning of the <b>Stone Age</b>.'
  ]
}

export const Pleistocene: TimelineDivision = {
  type: DivisionType.epoch,
  name: 'Pleistocene',
  start: Pliocene.end,
  end: 0.011,
  image: true,
  subdivisions: [],
  description: [
    'Continents remain essentially near their modern positions, moving no more than 100 km since the beginning of the epoch.',
    'The climate experiences repeated cycles of glaciation, commonly known as <b>Ice Ages</b>. Continental ice sheets grow and retreat every 40-100 thousand years. Sea level drops during colder phases and rises during warmer phases, with an amplitude of about 100-120 meters.',
    'Flora and fauna are mostly similar to the modern state. Many species retreat southward with each cold phase and spread back to higher latitudes during warm phases of the climate.',
    'Large land mammals (such as mammoth, mastodon, woolly rhinoceros, saber-toothed cat, giant sloth, cave bear, dire wolf) are common. They disappear near the end of the epoch, in a process known as the <b>Quaternary extinction</b> (120 to 11 thousand years ago).',
    'Anatomically modern <b>humans</b> appear (<b>Homo erectus</b> about 2 million years ago, <b>Homo sapiens</b> about 300 thousand years ago) and spread from Africa to other continents. They learn to use fire for cooking and heating.'
  ]
}

export const Holocene: TimelineDivision = {
  type: DivisionType.epoch,
  name: 'Holocene',
  start: Pleistocene.end,
  end: 0,
  image: true,
  subdivisions: [],
  description: [
    'Since the span of only ten thousand years is rather small on the geologic time scale, continents move by less than 1 km during this epoch. However, the melting of ice causes sea level to rise about 65 meters since the beginning of the Holocene, considerably altering coastlines.',
    'Following the much colder conditions of the last Ice Age, the climate is warming between 11 and 8 thousand years ago. It then remains fairly stable with a gradual cooling trend until about 150 years ago.',
    'A brief cooling event occurs about 8200 years ago and lasts about 400 years. Another mild cooling, known as the <b>Little Ice Age</b>, continues between the 14th and 19th centuries. A rapid increase in global temperatures is observed over the last 150 years.',
    'All recorded <b>human history</b> takes place during this epoch. With the development of agriculture between 10 and 7 thousand years ago, humans establish permanent settlements and form ancient civilizations. As a result of gradual scientific and technological progress, the human civilization becomes global.',
    'Human activity causes a significant decline in biodiversity, known as the <b>Holocene extinction</b>. Many species of bacteria, fungi, plants and animals disappear. This process is ongoing.'
  ]
}