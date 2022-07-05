import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelsinkiComponent } from './helsinki.component';

describe('HelsinkiComponent', () => {
  let component: HelsinkiComponent;
  let fixture: ComponentFixture<HelsinkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelsinkiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelsinkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
