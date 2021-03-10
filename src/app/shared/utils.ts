import { FormGroup, FormControl, FormArray } from '@angular/forms';

export class Month {
  ref: number;
  name: string;

  public constructor(ref: number, nome: string) {
    this.ref = ref;
    this.name = nome;
  }

}

export class Utils {
  constructor() {
    throw new Error('Esta classe não pode ser instanciada');
  }

  /**
   * Retorna a descrição do mês de acordo com o valor referênte
   */
  public static getMesByReferencia(mesRef: number | string): string {
    switch (mesRef.toString()) {
      case '1':
        return 'Janeiro';
      case '2':
        return 'Fevereiro';
      case '3':
        return 'Março';
      case '4':
        return 'Abril';
      case '5':
        return 'Maio';
      case '6':
        return 'Junho';
      case '7':
        return 'Julho';
      case '8':
        return 'Agosto';
      case '9':
        return 'Setembro';
      case '10':
        return 'Outubro';
      case '11':
        return 'Novembro';
      case '12':
        return 'Dezembro';
      default:
        return '';
    }
  }

  public static getMesBy(mesRef: number): string {
    switch (mesRef.toString()) {
      case '0':
        return 'JAN';
      case '1':
        return 'FEV';
      case '2':
        return 'MAR';
      case '3':
        return 'ABR';
      case '4':
        return 'MAI';
      case '5':
        return 'JUN';
      case '6':
        return 'JUL';
      case '7':
        return 'AGO';
      case '8':
        return 'SET';
      case '9':
        return 'OUT';
      case '10':
        return 'NOV';
      case '11':
        return 'DEZ';
      default:
        return '';
    }
  }


  public static isEmpty(value: any) {
    return this.isNullOrUndefined(value) ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === 'string' && (value.length === 0 || value.trim().length === 0));
  }

  public static isNullOrUndefined(description: any): boolean {

    return description === null || description === undefined;
  }

    /**
   * Aplica a máscara a determinado valor.
   *
   * @param string valor
   * @return string
   */
  public static aplicarMascara(valor: string, pattern: string): string {
    valor = valor.replace(/\D/g, '');
    const pad = pattern.replace(/\D/g, '').replace(/9/g, '_');
    const valorMask = valor + pad.substring(0, pad.length - valor.length);
    let valorMaskPos = 0;

    valor = '';
    for (let i = 0; i < pattern.length; i++) {
      // tslint:disable-next-line:radix
      if (isNaN(parseInt(pattern.charAt(i)))) {
        valor += pattern.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }

    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }

    return valor;
  }

  public static isCpfOrCnpj(cpfCnpj: string) {
    return Utils.replaceCharacters(cpfCnpj).length === 11 || Utils.replaceCharacters(cpfCnpj).length === 14;
  }

  public static validateCpf(cpf: string) {
    let sum = 0;
    let resto;

    cpf = cpf
      .replace('.', '')
      .replace('.', '')
      .replace('-', '')
      .trim();

    let allEqual = true;
    for (let i = 0; i < cpf.length - 1; i++) {
      if (cpf[i] !== cpf[i + 1]) {
        allEqual = false;
      }
    }

    if (allEqual) {
      return false;
    }

    for (let i = 1; i <= 9; i++) {
      // tslint:disable-next-line:radix
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (sum * 10) % 11;

    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    // tslint:disable-next-line:radix
    if (resto !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      // tslint:disable-next-line:radix
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (sum * 10) % 11;

    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    // tslint:disable-next-line:radix
    if (resto !== parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;
  }

  /**/
  public static validateCnpj(cnpj: string) {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj === '') {
      return false;
    }

    if (cnpj.length !== 14) {
      return false;
    }

    // Elimina CNPJs invalidos conhecidos
    let allEqual = true;
    for (let i = 0; i < cnpj.length - 1; i++) {
      if (cnpj[i] !== cnpj[i + 1]) {
        allEqual = false;
      }
    }

    if (allEqual) {
      return false;
    }

    // Valida DVs
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += +numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== +digitos.charAt(0)) {
      return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += +numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== +digitos.charAt(1)) {
      return false;
    }

    return true;
  }


  public static replaceCharacters(descricao: string) {
    return descricao.replace(/[^\d]+/g, '');
  }

  public static cutDateFunction(data: string): string {
    const dataSplit: string[] = data.substr(0, 10).split('-');
    return dataSplit[2] + '/' + dataSplit[1] + '/' + dataSplit[0];
  }

  public static validateAllFormFields(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else if (control instanceof FormArray) {
        this.validateAllFormArray(control);
      }
    });
  }

  public static validateAllFormArray(formArray: FormArray) {
    formArray.markAsTouched({ onlySelf: true });
    Object.values(formArray.controls).forEach(control => {
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else if (control instanceof FormArray) {
        this.validateAllFormArray(control);
      }
    });
  }

  public static changeDate(data: string){
    const str = data.split('-');
    const year = Number(str[0]);
    const month = Number(str[1]) - 1;
    const day = Number(str[2]);
    return new Date(year, month, day);
   }

   public static getMeses(): Month[] {
    const mes: Month[] = [
      new Month(1, 'Janeiro'),
      new Month(2, 'Fevereiro'),
      new Month(3, 'Março'),
      new Month(4, 'Abril'),
      new Month(5, 'Maio'),
      new Month(6, 'Junho'),
      new Month(7, 'Julho'),
      new Month(8, 'Agosto'),
      new Month(9, 'Setembro'),
      new Month(10, 'Outubro'),
      new Month(11, 'Novembro'),
      new Month(12, 'Dezembro')
    ];

    return mes;
  }

}
