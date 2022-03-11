import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioClasificacionesComponent } from './formulario-clasificaciones.component';

describe('FormularioClasificacionesComponent', () => {
  let component: FormularioClasificacionesComponent;
  let fixture: ComponentFixture<FormularioClasificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioClasificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioClasificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
