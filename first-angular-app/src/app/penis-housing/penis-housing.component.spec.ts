import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenisHousingComponent } from './penis-housing.component';

describe('PenisHousingComponent', () => {
  let component: PenisHousingComponent;
  let fixture: ComponentFixture<PenisHousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenisHousingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenisHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
