import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadVirtualCunComponent } from './modalidad-virtual-cun.component';

describe('ModalidadVirtualCunComponent', () => {
  let component: ModalidadVirtualCunComponent;
  let fixture: ComponentFixture<ModalidadVirtualCunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadVirtualCunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalidadVirtualCunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
