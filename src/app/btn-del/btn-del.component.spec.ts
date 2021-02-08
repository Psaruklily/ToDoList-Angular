import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDelComponent } from './btn-del.component';

describe('BtnDelComponent', () => {
  let component: BtnDelComponent;
  let fixture: ComponentFixture<BtnDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
