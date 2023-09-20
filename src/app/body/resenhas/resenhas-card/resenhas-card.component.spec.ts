import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenhasCardComponent } from './resenhas-card.component';

describe('ResenhasCardComponent', () => {
  let component: ResenhasCardComponent;
  let fixture: ComponentFixture<ResenhasCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResenhasCardComponent]
    });
    fixture = TestBed.createComponent(ResenhasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
