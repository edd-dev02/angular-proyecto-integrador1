import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioncounterComponent } from './sessioncounter.component';

describe('SessioncounterComponent', () => {
  let component: SessioncounterComponent;
  let fixture: ComponentFixture<SessioncounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessioncounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessioncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
