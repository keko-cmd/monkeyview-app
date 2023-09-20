import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenhasBodyComponent } from './resenhas-body.component';

describe('ResenhasBodyComponent', () => {
  let component: ResenhasBodyComponent;
  let fixture: ComponentFixture<ResenhasBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResenhasBodyComponent]
    });
    fixture = TestBed.createComponent(ResenhasBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
