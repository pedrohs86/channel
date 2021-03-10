import {Pipe, PipeTransform} from '@angular/core';
import {Utils} from '../utils';


@Pipe({name: 'mask'})
export class MaskPipe implements PipeTransform {

  transform (valor: string, pattern: string) {
    return Utils.aplicarMascara(valor, pattern);
  }

}
