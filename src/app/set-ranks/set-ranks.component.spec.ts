import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRanksComponent } from './set-ranks.component';

describe('SetRanksComponent', () => {
  let component: SetRanksComponent;
  let fixture: ComponentFixture<SetRanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetRanksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetRanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
