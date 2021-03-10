
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { of, timer } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Utils } from 'src/app/shared/utils';

import { SingUpService } from './singup.service';

export const checkUserCEP =
  (signUpService: SingUpService, time: number = 500, cep?: string, form?: FormGroup, estados?: any[]) => {
    return (control: AbstractControl) => {
      return timer(time).pipe(
        switchMap(() => {
          return !!control.value && Utils.replaceCharacters(control.value).length === 8 && (!!cep ? Utils.replaceCharacters(cep) !== Utils.replaceCharacters(control.value) : true) ?
          signUpService.checkUserCEP(Utils.replaceCharacters(control.value)).pipe(
                  catchError(err => of({erro: true}))) : of({erro: true});
          }),
        map((isTaken: any) => {
            if(!!isTaken && isTaken.erro) {
              return { cepInvalid: true}
            }
            // console.log(isTaken);
            form?.get('bairro')?.setValue(isTaken.bairro);
            form?.get('endereco')?.setValue(isTaken.logradouro);
            form?.get('cidade')?.setValue(isTaken.localidade);
            const estado = estados?.find(estado => estado.value.toLocaleLowerCase() === isTaken.uf.toLocaleLowerCase());
            if(estado) {
              form?.get('estado')?.setValue(estado.label);
            }
            return null
          }
         )
      );
    };

  };
