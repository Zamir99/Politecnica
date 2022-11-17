import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadDistanciaCunComponent } from './modalidad-distancia-cun.component';

describe('ModalidadDistanciaCunComponent', () => {
  let component: ModalidadDistanciaCunComponent;
  let fixture: ComponentFixture<ModalidadDistanciaCunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadDistanciaCunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalidadDistanciaCunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
