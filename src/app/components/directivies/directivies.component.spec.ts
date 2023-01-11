import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiviesComponent } from './directivies.component';

describe('DirectiviesComponent', () => {
  let component: DirectiviesComponent;
  let fixture: ComponentFixture<DirectiviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
