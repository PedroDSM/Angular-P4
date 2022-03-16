import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactivarCuentaComponent } from './desactivar-cuenta.component';

describe('DesactivarCuentaComponent', () => {
  let component: DesactivarCuentaComponent;
  let fixture: ComponentFixture<DesactivarCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesactivarCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesactivarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
