import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClasificacionesComponent } from './lista-clasificaciones.component';

describe('ListaClasificacionesComponent', () => {
  let component: ListaClasificacionesComponent;
  let fixture: ComponentFixture<ListaClasificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaClasificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClasificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
