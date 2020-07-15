import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDetailsPageRoutingModule } from './search-details-routing.module';

import { SearchDetailsPage } from './search-details.page';

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDetailsPageRoutingModule,
    PipesModule
  ],
  declarations: [SearchDetailsPage]
})
export class SearchDetailsPageModule {}
