import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [
    MatProgressBarModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
