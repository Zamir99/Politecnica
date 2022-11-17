import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionInglesComponent } from './informacion-ingles.component';

describe('InformacionInglesComponent', () => {
  let component: InformacionInglesComponent;
  let fixture: ComponentFixture<InformacionInglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionInglesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
