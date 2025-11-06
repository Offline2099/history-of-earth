import { Component, HostBinding, input } from '@angular/core';
import { DIVISION_TYPE } from '../../../constants/division-type';
import { CATEGORY_NAME, DescriptionPartCategory } from '../../../constants/description-part-category';
import { DescriptionElementType } from '../../../constants/description-element-type.enum';
import { TimelineBlock } from '../../../types/timeline-block.interface';
import { Description } from '../../../types/description';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent {

  @HostBinding('class.collapsed') get isCollapsed(): boolean {
    return this.block().isSummaryCollapsed;
  }

  readonly TypeName = DIVISION_TYPE;
  readonly DescriptionPartCategory = DescriptionPartCategory;
  readonly CategoryName = CATEGORY_NAME;
  readonly DescriptionElementType = DescriptionElementType;

  block = input.required<TimelineBlock>();
  description = input.required<Description>();

  toggleSummary(block: TimelineBlock): void {
    block.isSummaryCollapsed = !block.isSummaryCollapsed;
  }

}
