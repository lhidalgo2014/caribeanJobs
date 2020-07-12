import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchComponent } from './search.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, PipesModule],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchComponentModule {}
