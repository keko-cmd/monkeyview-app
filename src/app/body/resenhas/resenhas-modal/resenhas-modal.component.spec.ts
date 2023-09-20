import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenhasModalComponent } from './resenhas-modal.component';

describe('ResenhasModalComponent', () => {
  let component: ResenhasModalComponent;
  let fixture: ComponentFixture<ResenhasModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResenhasModalComponent]
    });
    fixture = TestBed.createComponent(ResenhasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
