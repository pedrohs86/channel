import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EMAIL_PATTERN } from '../shared/constants';
import { confirmPassword } from './singup/confirmPassword.validator';

export function formGroupPadraoUser(): FormGroup {
  const form: FormGroup = new FormGroup({
    tipo: new FormControl('FISICA', Validators.required),
    nome: new FormControl('', Validators.required),
    // Campos Pessoa Fisica
    sobrenome: new FormControl(''),
    dataNascimento:  new FormControl(''),
    sexo: new FormControl(''),
    cpf:  new FormControl(''),
    rg:  new FormControl(''),
    // Campos Pessoa Juridica
    razaoSocial: new FormControl(''),
    cnpj: new FormControl(''),
    inscricaoEstadual: new FormControl(''),

    //Dados Endereço
    identificacao: new FormControl('', Validators.required),
    nomeSobrenome: new FormControl(''),
    cep: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    complemento: new FormControl('', Validators.required),
    bairro: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    referencia: new FormControl('', Validators.required),

    //Dados de Contato
    celular: new FormControl('', Validators.required),
    fixo: new FormControl(''),

    //Dados de conta
    email: new FormControl('', [Validators.pattern(EMAIL_PATTERN), Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),


  }, confirmPassword);

  return form;
}
