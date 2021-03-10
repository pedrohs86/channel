import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Utils } from 'src/app/shared/utils';
import { formGroupPadraoUser } from '../singup.config';
import { SingUpService } from './singup.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingUpComponent implements OnInit, OnDestroy, AfterContentInit {

  form!: FormGroup;
  unsubscribe$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private signUpService: SingUpService,
    public router: Router,
  ) { }

  ngAfterContentInit(): void {
    this.form = formGroupPadraoUser();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  salvar() {
    console.log(this.form)
    if(this.form.valid) {
      this.signUpService.saveUser(this.form.value).subscribe(value => {
        console.log(value);
      });
    } else {
      Utils.validateAllFormFields(this.form);
    }
  }

}
