import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenFertilizerComponent } from './green-fertilizer.component';

describe('GreenFertilizerComponent', () => {
  let component: GreenFertilizerComponent;
  let fixture: ComponentFixture<GreenFertilizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenFertilizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenFertilizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
