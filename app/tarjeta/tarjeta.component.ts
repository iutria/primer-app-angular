import { FavoritoServiceService } from './../services/favorito-service.service';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() datos : any;

  constructor(private favoritosService: FavoritoServiceService) { }

  ngOnInit(): void {
  }

  AddFavoritos(){
    this.favoritosService.disparadorFavoritos.emit(this.datos);
  }
}
