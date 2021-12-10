import { HomeComponent } from './home/home.component';
import { DetallesComponent } from './detalles/detalles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'detalles/:id',
    component: DetallesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
