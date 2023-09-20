import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasCardsComponent } from './peliculas-cards.component';

describe('PeliculasCardsComponent', () => {
  let component: PeliculasCardsComponent;
  let fixture: ComponentFixture<PeliculasCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculasCardsComponent]
    });
    fixture = TestBed.createComponent(PeliculasCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
