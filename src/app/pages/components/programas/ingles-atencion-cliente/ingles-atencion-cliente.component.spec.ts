import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InglesAtencionClienteComponent } from './ingles-atencion-cliente.component';

describe('InglesAtencionClienteComponent', () => {
  let component: InglesAtencionClienteComponent;
  let fixture: ComponentFixture<InglesAtencionClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InglesAtencionClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InglesAtencionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
