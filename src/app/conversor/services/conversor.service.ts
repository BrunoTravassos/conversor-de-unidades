import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conversao, ConversaoResponse } from '../models';
import { HttpClient } from '@angular/common/http';


@Injectable(

)
export class ConversorService {

  // private readonly BASE_URL = "https://conversor-api.herokuapp.com/temperature/";

  // constructor(private http: HttpClient) { }
  constructor() { }


  converter(conversao: Conversao): Observable<any> {
    const from = conversao.temperaturaDe;
    const to = conversao.temperaturaPara;
    let convertedValue;

    if (from === to) { ({ alert: 'As unidades de origem e destino não podem ser iguais!' }); }


    if (from === '°C' && to === '°F') { convertedValue = ((conversao.valor) * 9 / 5) + 32; }
    if (from === '°C' && to === '°K') { convertedValue = (conversao.valor*1) + 273.15; }

    if (from === '°F' && to === '°C') { convertedValue = ((conversao.valor) - 32) * 5 / 9; }
    if (from === '°F' && to === '°K') { convertedValue = (((conversao.valor) - 32) * 5 / 9) + 273.15; }

    if (from === '°K' && to === '°C') { convertedValue = (conversao.valor) - 273.15; }
    if (from === '°K' && to === '°F') {
      convertedValue = ((((conversao.valor ) - 273.15) * 9) / 5) + 32;
    }
    // console.log(convertedValue)
    return convertedValue
  }


  temperaturaPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number {
    if (conversaoResponse === undefined) {
      return 0;
    } else {

      return conversaoResponse.value[conversao.temperaturaPara];
    }
  }

  temperaturaDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
    if (conversaoResponse === undefined) {
      return '0';
    }
    return (1 / conversaoResponse.value[conversao.temperaturaPara]).toFixed(1);
  }


}
