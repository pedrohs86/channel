import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { formGroupPadraoUser } from '../singup.config';

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

}
