import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informacion1Component } from './informacion1.component';

describe('Informacion1Component', () => {
  let component: Informacion1Component;
  let fixture: ComponentFixture<Informacion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Informacion1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Informacion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
