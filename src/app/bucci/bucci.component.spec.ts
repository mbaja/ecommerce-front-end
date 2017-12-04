import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucciComponent } from './bucci.component';

describe('BucciComponent', () => {
  let component: BucciComponent;
  let fixture: ComponentFixture<BucciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
