import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dados-contato',
  templateUrl: './dados-contato.component.html',
  styleUrls: ['./dados-contato.component.scss']
})
export class DadosContatoComponent implements OnInit {

  @Input()
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
