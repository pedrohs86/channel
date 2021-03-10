import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SingUpService {

  constructor(private http: HttpClient) {}


  checkUserCEP(cep: string): any{
    return this.http.get('http://viacep.com.br/ws/' + cep + '/json');
  }
}
