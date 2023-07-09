import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPage } from './index.component';

describe('IndexComponent', () => {
  let component: IndexPage;
  let fixture: ComponentFixture<IndexPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexPage]
    });
    fixture = TestBed.createComponent(IndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
