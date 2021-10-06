import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conversao, ConversaoResponse } from '../models';
import { HttpClient } from '@angular/common/http';


@Injectable(

)
export class ConversorService {

  private readonly BASE_URL = "https://conversor-api.herokuapp.com/temperature/";

  constructor(private http: HttpClient) { }

  converter(conversao: Conversao): Observable<any> {
    let params = `&from=${conversao.temperaturaDe}&to=${conversao.temperaturaPara}&${conversao.valor}`;
    return this.http.get(this.BASE_URL + params);
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
