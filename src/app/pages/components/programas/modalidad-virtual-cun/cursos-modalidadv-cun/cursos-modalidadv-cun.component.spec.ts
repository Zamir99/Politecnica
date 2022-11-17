import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosModalidadvCunComponent } from './cursos-modalidadv-cun.component';

describe('CursosModalidadvCunComponent', () => {
  let component: CursosModalidadvCunComponent;
  let fixture: ComponentFixture<CursosModalidadvCunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosModalidadvCunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosModalidadvCunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
