import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Conversao, ConversaoResponse } from '../models';
import { ConversorService } from '../services';

@Component({
  selector: 'modal-temperatura',
  templateUrl: './modal-temperatura.component.html',
  styleUrls: ['./modal-temperatura.component.css']
})
export class ModalTemperaturaComponent implements OnInit {



  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();

  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private conversorService: ConversorService
  ) { }

  ngOnInit(): void {
  }

  novaConsulta() {
    this.onConfirm.emit();
  }

  get valorConvertido(): string {
   /*  console.log(this.conversaoResponse)
    console.log(this.conversorService.converter(this.conversao)) */
    /* if (this.conversaoResponse === undefined) {
      return '0'
    } else */ {
      let x:any = this.conversorService.converter(this.conversao)
      // return (this.conversao.valor * this.conversaoResponse.rates[this.conversao.moedaPara]).toFixed(2);
      console.log(this.conversorService.converter)
      return x
    }
  }

  get temperaturaPara(): number {
    return this.conversorService.temperaturaPara(this.conversaoResponse, this.conversao)
  }

  get temperaturaDe(): string {
    return this.conversorService.temperaturaDe(this.conversaoResponse, this.conversao)
  }


}
