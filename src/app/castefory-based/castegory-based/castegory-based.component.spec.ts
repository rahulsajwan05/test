import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastegoryBasedComponent } from './castegory-based.component';

describe('CastegoryBasedComponent', () => {
  let component: CastegoryBasedComponent;
  let fixture: ComponentFixture<CastegoryBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastegoryBasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastegoryBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
