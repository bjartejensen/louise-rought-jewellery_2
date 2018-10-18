import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaerkstedetComponent } from './vaerkstedet.component';

describe('VaerkstedetComponent', () => {
  let component: VaerkstedetComponent;
  let fixture: ComponentFixture<VaerkstedetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaerkstedetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaerkstedetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
