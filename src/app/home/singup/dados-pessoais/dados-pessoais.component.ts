import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {

  @Input()
  form!: FormGroup;
  fisica = true;

  constructor() { }

  ngOnInit(): void {
    this.form.get('tipo')?.valueChanges.subscribe(value => {
      if(value === 'FISICA') {
        this.fisica = true;
        this.setErrosNullJuridica();
      } else {
        this.fisica = false;
        this.setErrosNullFisica();
      }
    });
  }

  setErrosNullJuridica() {

    this.form.get('razaoSocial')?.setValue(undefined);
    this.form.get('cnpj')?.setValue(undefined);
    this.form.get('inscricaoEstadual')?.setValue(undefined);

    this.form.get('razaoSocial')?.setErrors(null);
    this.form.get('cnpj')?.setErrors(null);
    this.form.get('inscricaoEstadual')?.setErrors(null);
  }

  setErrosNullFisica() {

    this.form.get('sobrenome')?.setValue(undefined);
    this.form.get('dataNascimento')?.setValue(undefined);
    this.form.get('sexo')?.setValue(undefined);
    this.form.get('cpf')?.setValue(undefined);
    this.form.get('rg')?.setValue(undefined);

    this.form.get('sobrenome')?.setErrors(null);
    this.form.get('dataNascimento')?.setErrors(null);
    this.form.get('sexo')?.setErrors(null);
    this.form.get('cpf')?.setErrors(null);
    this.form.get('rg')?.setErrors(null);
  }

}
