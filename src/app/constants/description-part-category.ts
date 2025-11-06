export enum DescriptionPartCategory {
  general,
  environment,
  geology,
  climate,
  life,
  extinctions,
  humans
}

export const CATEGORY_NAME: Record<DescriptionPartCategory, string> = {
  [DescriptionPartCategory.general]: '',
  [DescriptionPartCategory.environment]: 'Environment',
  [DescriptionPartCategory.geology]: 'Geology',
  [DescriptionPartCategory.climate]: 'Climate',
  [DescriptionPartCategory.life]: 'Life',
  [DescriptionPartCategory.extinctions]: 'Extinctions',
  [DescriptionPartCategory.humans]: 'Humans'
}