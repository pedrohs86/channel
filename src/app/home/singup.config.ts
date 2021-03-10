import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EMAIL_PATTERN } from '../shared/constants';
import { confirmPassword } from './singup/confirmPassword.validator';

export function formGroupPadraoUser(): FormGroup {
  const form: FormGroup = new FormGroup({

    id: new FormControl(undefined),
    tipo: new FormControl('FISICA', Validators.required),
    nome: new FormControl(undefined, Validators.required),
    // Campos Pessoa Fisica
    sobrenome: new FormControl(undefined),
    dataNascimento:  new FormControl(undefined),
    sexo: new FormControl(undefined),
    cpf:  new FormControl(undefined),
    rg:  new FormControl(undefined),
    // Campos Pessoa Juridica
    razaoSocial: new FormControl(undefined),
    cnpj: new FormControl(undefined),
    inscricaoEstadual: new FormControl(undefined),

    //Dados Endereço
    identificacao: new FormControl(undefined, Validators.required),
    nomeSobrenome: new FormControl(undefined),
    cep: new FormControl(undefined, Validators.required),
    endereco: new FormControl(undefined, Validators.required),
    numero: new FormControl(undefined, Validators.required),
    complemento: new FormControl(undefined, Validators.required),
    bairro: new FormControl(undefined, Validators.required),
    cidade: new FormControl(undefined, Validators.required),
    estado: new FormControl(undefined, Validators.required),
    referencia: new FormControl(undefined, Validators.required),

    //Dados de Contato
    celular: new FormControl(undefined, Validators.required),
    fixo: new FormControl(undefined),

    //Dados de conta
    email: new FormControl(undefined, [Validators.pattern(EMAIL_PATTERN), Validators.required]),
    password: new FormControl(undefined, [Validators.required]),
    confirmPassword: new FormControl(undefined, [Validators.required]),


  }, confirmPassword);

  return form;
}
