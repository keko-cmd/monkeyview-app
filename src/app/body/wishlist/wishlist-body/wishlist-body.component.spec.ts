import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistBodyComponent } from './wishlist-body.component';

describe('WishlistBodyComponent', () => {
  let component: WishlistBodyComponent;
  let fixture: ComponentFixture<WishlistBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistBodyComponent]
    });
    fixture = TestBed.createComponent(WishlistBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
