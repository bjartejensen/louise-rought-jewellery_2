import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SapphiresComponent } from './sapphires.component';

describe('SapphiresComponent', () => {
  let component: SapphiresComponent;
  let fixture: ComponentFixture<SapphiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SapphiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapphiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
