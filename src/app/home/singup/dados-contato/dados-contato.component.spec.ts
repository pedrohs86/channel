import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosContatoComponent } from './dados-contato.component';

describe('DadosContatoComponent', () => {
  let component: DadosContatoComponent;
  let fixture: ComponentFixture<DadosContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
