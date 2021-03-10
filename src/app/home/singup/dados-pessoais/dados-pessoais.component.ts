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
      } else {
        this.fisica = false;
      }
    });
  }

}
