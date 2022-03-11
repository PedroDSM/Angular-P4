import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasDetalleComponent } from './idiomas-detalle.component';

describe('IdiomasDetalleComponent', () => {
  let component: IdiomasDetalleComponent;
  let fixture: ComponentFixture<IdiomasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomasDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiomasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
