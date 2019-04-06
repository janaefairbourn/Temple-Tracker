import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleDetailComponent } from './temple-detail.component';

describe('TempleDetailComponent', () => {
  let component: TempleDetailComponent;
  let fixture: ComponentFixture<TempleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
