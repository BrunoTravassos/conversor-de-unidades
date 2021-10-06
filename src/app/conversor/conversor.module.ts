import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { ConversorService, TemperaturaService } from './services';



@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    TemperaturaService,
    ConversorService
  ]
})
export class ConversorModule { }
