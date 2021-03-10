import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dados-conta',
  templateUrl: './dados-conta.component.html',
  styleUrls: ['./dados-conta.component.scss']
})
export class DadosContaComponent implements OnInit {

  @Input()
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
