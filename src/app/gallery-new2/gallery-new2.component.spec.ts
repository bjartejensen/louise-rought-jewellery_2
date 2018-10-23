import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryNew2Component } from './gallery-new2.component';

describe('GalleryNew2Component', () => {
  let component: GalleryNew2Component;
  let fixture: ComponentFixture<GalleryNew2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryNew2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryNew2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
