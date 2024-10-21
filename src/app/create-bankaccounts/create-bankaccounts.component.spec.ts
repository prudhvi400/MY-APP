import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBankaccountsComponent } from './create-bankaccounts.component';

describe('CreateBankaccountsComponent', () => {
  let component: CreateBankaccountsComponent;
  let fixture: ComponentFixture<CreateBankaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBankaccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBankaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
