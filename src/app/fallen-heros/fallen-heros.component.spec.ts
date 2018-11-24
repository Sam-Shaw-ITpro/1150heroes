import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FallenHerosComponent } from './fallen-heros.component';

describe('FallenHerosComponent', () => {
  let component: FallenHerosComponent;
  let fixture: ComponentFixture<FallenHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FallenHerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FallenHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
