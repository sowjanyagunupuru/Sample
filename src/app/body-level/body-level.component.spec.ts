import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLevelComponent } from './body-level.component';

describe('BodyLevelComponent', () => {
  let component: BodyLevelComponent;
  let fixture: ComponentFixture<BodyLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
