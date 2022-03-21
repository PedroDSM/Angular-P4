import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasProtegidasComponent } from './rutas-protegidas.component';

describe('RutasProtegidasComponent', () => {
  let component: RutasProtegidasComponent;
  let fixture: ComponentFixture<RutasProtegidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutasProtegidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasProtegidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
