import { Injectable } from '@angular/core';
import { Temperatura } from '../models';

@Injectable()
export class TemperaturaService {

  private temparaturas: Temperatura[];

  constructor() { }

  /* private temperaturaObj = [
    { "sigla": "°C", "descricao": "Celsius" },
    { "sigla": "°K", "descricao": "Kelvin" },
    { "sigla": "°F", "descricao": "Fahrenheit" }
  ]; */
  private temperaturaObj = [
    { "sigla": "°C", "descricao": "Graus Celcius" },
    { "sigla": "°K", "descricao": "Kelvin" },
    { "sigla": "°F", "descricao": "Graus Fahrenheit" }
  ];

  listarTodas(): Temperatura[] {
    if (this.temparaturas) {
      return this.temparaturas;
    }
    this.temparaturas = [];

    /**
     * varre cada indice do array moeda e add ele junto do object.assign em this.moedas.push(moeda)
     */
    for (let temperaturaObj of this.temperaturaObj) {
      let temperatura: Temperatura = new Temperatura();
      Object.assign(temperatura, temperaturaObj)
      this.temparaturas.push(temperatura);
    }

    return this.temparaturas;
  }

}
