import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardContentComponent } from './card-content/card-content.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent, CardHeaderComponent, CardContentComponent],
  imports: [CommonModule],
  exports: [CardComponent, CardHeaderComponent, CardContentComponent],
})
export class FdsCardModule {}
