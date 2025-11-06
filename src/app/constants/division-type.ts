export enum DivisionType {
  eon = 1,
  era,
  period,
  epoch
}

export const DIVISION_TYPE: Record<DivisionType, string> = {
  [DivisionType.eon]: 'Eon',
  [DivisionType.era]: 'Era',
  [DivisionType.period]: 'Period',
  [DivisionType.epoch]: 'Epoch'
}
