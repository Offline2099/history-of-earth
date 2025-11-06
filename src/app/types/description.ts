import { DescriptionPartCategory } from '../constants/description-part-category';
import { DescriptionElementType } from '../constants/description-element-type.enum';

export interface DescriptionPart {
  category: DescriptionPartCategory;
  elements: DescriptionElement[] | string;
}

export interface DescriptionElement {
  type: DescriptionElementType;
  text: string;
}

export type Description = DescriptionPart[];

export type DescriptionList = Record<string, Description>;