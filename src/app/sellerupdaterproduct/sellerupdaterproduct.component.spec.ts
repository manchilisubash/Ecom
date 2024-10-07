import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerupdaterproductComponent } from './sellerupdaterproduct.component';

describe('SellerupdaterproductComponent', () => {
  let component: SellerupdaterproductComponent;
  let fixture: ComponentFixture<SellerupdaterproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerupdaterproductComponent]
    });
    fixture = TestBed.createComponent(SellerupdaterproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
