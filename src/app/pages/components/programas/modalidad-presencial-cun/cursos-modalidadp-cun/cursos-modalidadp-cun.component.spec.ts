import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosModalidadpCunComponent } from './cursos-modalidadp-cun.component';

describe('CursosModalidadpCunComponent', () => {
  let component: CursosModalidadpCunComponent;
  let fixture: ComponentFixture<CursosModalidadpCunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosModalidadpCunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosModalidadpCunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
