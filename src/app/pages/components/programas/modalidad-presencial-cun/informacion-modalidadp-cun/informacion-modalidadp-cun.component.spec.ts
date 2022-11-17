import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionModalidadpCunComponent } from './informacion-modalidadp-cun.component';

describe('InformacionModalidadpCunComponent', () => {
  let component: InformacionModalidadpCunComponent;
  let fixture: ComponentFixture<InformacionModalidadpCunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionModalidadpCunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionModalidadpCunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
