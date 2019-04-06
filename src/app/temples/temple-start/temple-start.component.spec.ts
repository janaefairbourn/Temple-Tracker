import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleStartComponent } from './temple-start.component';

describe('TempleStartComponent', () => {
  let component: TempleStartComponent;
  let fixture: ComponentFixture<TempleStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
