import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreflipkartComponent } from './preflipkart.component';

describe('PreflipkartComponent', () => {
  let component: PreflipkartComponent;
  let fixture: ComponentFixture<PreflipkartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreflipkartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreflipkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
