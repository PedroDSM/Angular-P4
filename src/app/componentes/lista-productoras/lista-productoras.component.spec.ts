import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductorasComponent } from './lista-productoras.component';

describe('ListaProductorasComponent', () => {
  let component: ListaProductorasComponent;
  let fixture: ComponentFixture<ListaProductorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProductorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProductorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
