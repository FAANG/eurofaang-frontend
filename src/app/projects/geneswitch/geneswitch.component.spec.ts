import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneswitchComponent } from './geneswitch.component';

describe('GeneswitchComponent', () => {
  let component: GeneswitchComponent;
  let fixture: ComponentFixture<GeneswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
