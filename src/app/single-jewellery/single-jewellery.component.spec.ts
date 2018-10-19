import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleJewelleryComponent } from './single-jewellery.component';

describe('SingleJewelleryComponent', () => {
  let component: SingleJewelleryComponent;
  let fixture: ComponentFixture<SingleJewelleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleJewelleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleJewelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
