import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SingUpService } from '../singup.service';
import { checkUserCEP } from '../user-cep.validator.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  @Input()
  form!: FormGroup;

  estados = [
              {"label":"Acre","value":"AC"},
              {"label":"Alagoas","value":"AL"},
              {"label":"Amap\u00e1","value":"AP"},
              {"label":"Amazonas","value":"AM"},
              {"label":"Bahia","value":"BA"},
              {"label":"Cear\u00e1","value":"CE"},
              {"label":"Distrito Federal","value":"DF"},
              {"label":"Esp\u00edrito Santo","value":"ES"},
              {"label":"Goi\u00e1s","value":"GO"},
              {"label":"Maranh\u00e3o","value":"MA"},
              {"label":"Mato Grosso","value":"MT"},
              {"label":"Mato Grosso do Sul","value":"MS"},
              {"label":"Minas Gerais","value":"MG"},
              {"label":"Paran\u00e1","value":"PR"},
              {"label":"Para\u00edba","value":"PB"},
              {"label":"Par\u00e1","value":"PA"},
              {"label":"Pernambuco","value":"PE"},
              {"label":"Piau\u00ed","value":"PI"},
              {"label":"Rio Grande do Norte","value":"RN"},
              {"label":"Rio Grande do Sul","value":"RS"},
              {"label":"Rio de Janeiro","value":"RJ"},
              {"label":"Rond\u00f4nia","value":"RO"},
              {"label":"Roraima","value":"RR"},
              {"label":"Santa Catarina","value":"SC"},
              {"label":"Sergipe","value":"SE"},
              {"label":"S\u00e3o Paulo","value":"SP"}
              ,{"label":"Tocantins","value":"TO"}
            ];

  constructor(
    private signUpService: SingUpService
  ) { }

  ngOnInit(): void {
    this.form.get('cep')?.setAsyncValidators(checkUserCEP(this.signUpService, 500, this.form.get('cep')?.value, this.form, this.estados))
  }

}
