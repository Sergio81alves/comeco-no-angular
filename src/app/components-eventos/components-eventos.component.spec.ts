import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsEventosComponent } from './components-eventos.component';

describe('ComponentsEventosComponent', () => {
  let component: ComponentsEventosComponent;
  let fixture: ComponentFixture<ComponentsEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
