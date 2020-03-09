import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktlisteComponent } from './kontaktliste.component';

describe('KontaktlisteComponent', () => {
  let component: KontaktlisteComponent;
  let fixture: ComponentFixture<KontaktlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaktlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
