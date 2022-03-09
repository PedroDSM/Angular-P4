import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDirectoresComponent } from './formulario-directores.component';

describe('FormularioDirectoresComponent', () => {
  let component: FormularioDirectoresComponent;
  let fixture: ComponentFixture<FormularioDirectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDirectoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDirectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
