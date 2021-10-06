import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { ConversorService, TemperaturaService } from './services';
import { FormsModule } from '@angular/forms';
import { ModalTemperaturaComponent } from './modal-temperatura/modal-temperatura.component';



@NgModule({
  declarations: [
    ConversorComponent,
    ModalTemperaturaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
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
