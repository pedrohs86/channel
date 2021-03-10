import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingUpService {

  constructor(private http: HttpClient) {}


  checkUserCEP(cep: string): any{
    return this.http.get('http://viacep.com.br/ws/' + cep + '/json');
  }

  saveUser(user: any): Observable<any> {
    return this.http.post('http://localhost:8080/auth', user);
  }

}
