import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SustanabilityComponent } from './sustanability.component';

describe('SustanabilityComponent', () => {
  let component: SustanabilityComponent;
  let fixture: ComponentFixture<SustanabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustanabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustanabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
