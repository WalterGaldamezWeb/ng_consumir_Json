import { HttpClient } from '@angular/common/http';
import { Injectable, ɵLocaleDataIndex } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataJsonService {

  constructor(private http:HttpClient) {
    console.log('Servicio Corriendo');
  }

  obtenerData(){
    return this.http.get('../../assets/data.json');
  }
}
