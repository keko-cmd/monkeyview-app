import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasBodyComponent } from './peliculas-body.component';

describe('PeliculasBodyComponent', () => {
  let component: PeliculasBodyComponent;
  let fixture: ComponentFixture<PeliculasBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculasBodyComponent]
    });
    fixture = TestBed.createComponent(PeliculasBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
