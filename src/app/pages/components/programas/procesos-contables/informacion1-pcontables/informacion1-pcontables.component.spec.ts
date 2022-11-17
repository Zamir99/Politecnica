import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informacion1PcontablesComponent } from './informacion1-pcontables.component';

describe('Informacion1PcontablesComponent', () => {
  let component: Informacion1PcontablesComponent;
  let fixture: ComponentFixture<Informacion1PcontablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Informacion1PcontablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Informacion1PcontablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
