import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDistanciaCunComponent } from './informacion-distancia-cun.component';

describe('InformacionDistanciaCunComponent', () => {
  let component: InformacionDistanciaCunComponent;
  let fixture: ComponentFixture<InformacionDistanciaCunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionDistanciaCunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionDistanciaCunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
