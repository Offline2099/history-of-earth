import { Component, HostBinding, Signal, input } from '@angular/core';
import { TimelineDirection } from '../../../constants/timeline-structure/timeline-direction.enum';
import { DIVISION_TYPE } from '../../../constants/timeline-structure/division-type';
import { CATEGORY_NAME, DescriptionPartCategory } from '../../../constants/description-structure/description-part-category';
import { DescriptionElementType } from '../../../constants/description-structure/description-element-type.enum';
import { TimelineBlock } from '../../../types/timeline-block.interface';
import { Description } from '../../../types/description';
import { TimePointComponent } from '../05-time-point/time-point.component';
import { ScreenService } from '../../../services/screen.service';

@Component({
  selector: 'app-description',
  imports: [TimePointComponent],
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

  direction = input.required<TimelineDirection>();
  block = input.required<TimelineBlock>();
  description = input.required<Description>();

  isDesktop: Signal<boolean>;

  constructor(private screen: ScreenService) {
    this.isDesktop = this.screen.isDesktop;
  }

  toggleSummary(block: TimelineBlock): void {
    block.isSummaryCollapsed = !block.isSummaryCollapsed;
  }

}
