import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionModalidadvCunComponent } from './informacion-modalidadv-cun.component';

describe('InformacionModalidadvCunComponent', () => {
  let component: InformacionModalidadvCunComponent;
  let fixture: ComponentFixture<InformacionModalidadvCunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionModalidadvCunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionModalidadvCunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
