import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilduploadComponent } from './bildupload.component';

describe('BilduploadComponent', () => {
  let component: BilduploadComponent;
  let fixture: ComponentFixture<BilduploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilduploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilduploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
