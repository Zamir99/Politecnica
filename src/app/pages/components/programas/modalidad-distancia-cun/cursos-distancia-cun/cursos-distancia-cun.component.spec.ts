import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDistanciaCunComponent } from './cursos-distancia-cun.component';

describe('CursosDistanciaCunComponent', () => {
  let component: CursosDistanciaCunComponent;
  let fixture: ComponentFixture<CursosDistanciaCunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosDistanciaCunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosDistanciaCunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
