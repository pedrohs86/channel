import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SingUpComponent } from './singup/singup.component';



const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      children: [
          {
              path: '',
              component: SingUpComponent,
              data: { title: 'Cadastrar' }
          },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
