import { DescriptionPartCategory } from '../constants/description-structure/description-part-category';
import { DescriptionElementType } from '../constants/description-structure/description-element-type.enum';

export interface DescriptionPart {
  category: DescriptionPartCategory;
  elements: DescriptionElement[] | string;
}

export interface DescriptionElement {
  type: DescriptionElementType;
  text: string;
  start?: number;
  end?: number;
}

export type Description = DescriptionPart[];

export type DescriptionList = Record<string, Description>;