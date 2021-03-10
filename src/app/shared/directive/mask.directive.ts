import {
  Directive,
  HostListener,
  Input,
  ElementRef, OnInit
} from '@angular/core';
import {Utils} from '../utils';


@Directive({
  selector: '[appMask]'
})
export class MaskDirective implements OnInit {


  @Input()
  mask!: string;

  constructor(private el: ElementRef) {
  }


  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {

    // retorna caso pressionado backspace
    if ($event.keyCode === 8) {
      return;
    }

    const valor = $event.target.value.replace(/\D/g, '');

    $event.target.value = Utils.aplicarMascara(valor, this.mask);
  }


  ngOnInit(): void {

  }
}
