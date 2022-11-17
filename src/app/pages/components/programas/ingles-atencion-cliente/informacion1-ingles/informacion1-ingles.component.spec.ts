import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informacion1InglesComponent } from './informacion1-ingles.component';

describe('Informacion1InglesComponent', () => {
  let component: Informacion1InglesComponent;
  let fixture: ComponentFixture<Informacion1InglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Informacion1InglesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Informacion1InglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
