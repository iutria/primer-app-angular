import { PeticionesServiceService } from './../services/peticiones-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards : Array<any>=[];

  constructor(private PeticionesServiceService:PeticionesServiceService){

  }

  ngOnInit(): void {  
    this.cargarDatos();
  }

  private cargarDatos(){
    this.PeticionesServiceService.get('').subscribe(values => {
      for(let item of values.hits){
        if(!item.tags.includes('nude')){
          this.cards.push(item);
        }
      }
    })
  }

}
