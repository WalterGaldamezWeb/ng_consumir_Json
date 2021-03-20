import { Component, OnInit } from '@angular/core';
import { DataJsonService } from '../services/data-json.service';



@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  datos:any [] = [];

  constructor(private data_json:DataJsonService) {
    this.data_json.obtenerData().subscribe( (respuesta:any) => {
      this.datos = respuesta;
    });
    this.recorrer();
  }

  ngOnInit(): void {
  }

  recorrer(){
    this.data_json.obtenerData().subscribe( (respuesta:any) => {
      this.datos = respuesta;
      respuesta.forEach(element => {
        console.log(element.email);
      });
    });
  }

}
