import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDetailsComponent } from './search-details.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [SearchDetailsComponent],
  exports: [SearchDetailsComponent]
})
export class SearchDetailsComponentModule {}