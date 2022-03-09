import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIdiomasComponent } from './formulario-idiomas.component';

describe('FormularioIdiomasComponent', () => {
  let component: FormularioIdiomasComponent;
  let fixture: ComponentFixture<FormularioIdiomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioIdiomasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioIdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
