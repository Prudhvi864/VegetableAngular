import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
 // import { from } from 'rxjs';
import { RfFormComponent } from './rf-form/rf-form.component';


@NgModule({
  declarations: [ RfFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [RfFormComponent]
})
export class VegetableModule { }
