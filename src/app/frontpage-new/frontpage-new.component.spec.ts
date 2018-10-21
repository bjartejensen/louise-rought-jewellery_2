import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageNewComponent } from './frontpage-new.component';

describe('FrontpageNewComponent', () => {
  let component: FrontpageNewComponent;
  let fixture: ComponentFixture<FrontpageNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontpageNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
