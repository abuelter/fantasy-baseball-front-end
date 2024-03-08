import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsContainerComponent } from './elements-container.component';

describe('ElementsContainerComponent', () => {
  let component: ElementsContainerComponent;
  let fixture: ComponentFixture<ElementsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
