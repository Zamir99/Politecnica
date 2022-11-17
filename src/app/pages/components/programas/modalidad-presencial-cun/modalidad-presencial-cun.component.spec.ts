import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadPresencialCunComponent } from './modalidad-presencial-cun.component';

describe('ModalidadPresencialCunComponent', () => {
  let component: ModalidadPresencialCunComponent;
  let fixture: ComponentFixture<ModalidadPresencialCunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadPresencialCunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalidadPresencialCunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
