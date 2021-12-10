import { PeticionesServiceService } from './../services/peticiones-service.service';


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{

  
  datos:any;

  constructor(private route:ActivatedRoute,private PeticionesServiceService:PeticionesServiceService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((parametros:any) => {          
      this.cargarDatos(parametros.params.id);
    });
  }

  private cargarDatos(id:string){
    this.PeticionesServiceService.get('&id='+id).subscribe(values => {
      this.datos=values.hits[0];
    })
  }
  
}
