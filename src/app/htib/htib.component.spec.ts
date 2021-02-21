import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtibComponent } from './htib.component';

describe('HtibComponent', () => {
  let component: HtibComponent;
  let fixture: ComponentFixture<HtibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
