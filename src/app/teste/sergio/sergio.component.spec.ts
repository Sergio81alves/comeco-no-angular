import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SergioComponent } from './sergio.component';

describe('SergioComponent', () => {
  let component: SergioComponent;
  let fixture: ComponentFixture<SergioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SergioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SergioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
