import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDisplayComponent } from './modal-display.component';

describe('ModalDisplayComponent', () => {
  let component: ModalDisplayComponent;
  let fixture: ComponentFixture<ModalDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
