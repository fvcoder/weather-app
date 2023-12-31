import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPage } from './view.component';

describe('ViewPage', () => {
  let component: ViewPage;
  let fixture: ComponentFixture<ViewPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPage]
    });
    fixture = TestBed.createComponent(ViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
