import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProductorasComponent } from './formulario-productoras.component';

describe('FormularioProductorasComponent', () => {
  let component: FormularioProductorasComponent;
  let fixture: ComponentFixture<FormularioProductorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioProductorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProductorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
