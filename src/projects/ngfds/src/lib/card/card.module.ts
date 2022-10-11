import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardContentComponent } from './card-content/card-content.component';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent, CardContentComponent],
  imports: [CommonModule],
  exports: [CardComponent, CardContentComponent],
})
export class FdsCardModule {}
