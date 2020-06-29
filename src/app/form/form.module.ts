import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormComponent } from './form.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [FormComponent],
  exports: [FormComponent]
})
export class FormComponentModule {}
