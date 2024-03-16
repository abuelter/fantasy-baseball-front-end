import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTiersComponent } from './set-tiers.component';

describe('SetTiersComponent', () => {
  let component: SetTiersComponent;
  let fixture: ComponentFixture<SetTiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTiersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
