import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SingUpComponent } from './singup/singup.component';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { DadosContaComponent } from './singup/dados-conta/dados-conta.component';
import { DadosContatoComponent } from './singup/dados-contato/dados-contato.component';
import { DadosPessoaisComponent } from './singup/dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from './singup/endereco/endereco.component';


@NgModule({
    declarations: [
        SingUpComponent,
        HomeComponent,
        DadosContaComponent,
        DadosContatoComponent,
        DadosPessoaisComponent,
        EnderecoComponent
    ],
    imports: [
      RouterModule,
      SharedModule,
      HomeRoutingModule
    ],
    providers: [
    ],

})
export class HomeModule { }
