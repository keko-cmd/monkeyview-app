import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistCardsComponent } from './wishlist-cards.component';

describe('WishlistCardsComponent', () => {
  let component: WishlistCardsComponent;
  let fixture: ComponentFixture<WishlistCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistCardsComponent]
    });
    fixture = TestBed.createComponent(WishlistCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
