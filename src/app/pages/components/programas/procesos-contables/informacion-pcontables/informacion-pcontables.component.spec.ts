import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPcontablesComponent } from './informacion-pcontables.component';

describe('InformacionPcontablesComponent', () => {
  let component: InformacionPcontablesComponent;
  let fixture: ComponentFixture<InformacionPcontablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionPcontablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionPcontablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
