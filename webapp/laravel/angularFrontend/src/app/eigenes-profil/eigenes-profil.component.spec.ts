import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EigenesProfilComponent } from './eigenes-profil.component';

describe('EigenesProfilComponent', () => {
  let component: EigenesProfilComponent;
  let fixture: ComponentFixture<EigenesProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EigenesProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EigenesProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
