import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RumigenComponent } from './rumigen.component';

describe('RumigenComponent', () => {
  let component: RumigenComponent;
  let fixture: ComponentFixture<RumigenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RumigenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RumigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
