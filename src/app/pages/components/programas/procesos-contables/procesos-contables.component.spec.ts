import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosContablesComponent } from './procesos-contables.component';

describe('ProcesosContablesComponent', () => {
  let component: ProcesosContablesComponent;
  let fixture: ComponentFixture<ProcesosContablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesosContablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesosContablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
