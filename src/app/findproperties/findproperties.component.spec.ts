import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindpropertiesComponent } from './findproperties.component';

describe('FindpropertiesComponent', () => {
  let component: FindpropertiesComponent;
  let fixture: ComponentFixture<FindpropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindpropertiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
