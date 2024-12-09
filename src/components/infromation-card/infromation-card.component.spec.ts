import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfromationCardComponent } from './infromation-card.component';

describe('InfromationCardComponent', () => {
  let component: InfromationCardComponent;
  let fixture: ComponentFixture<InfromationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfromationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfromationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
