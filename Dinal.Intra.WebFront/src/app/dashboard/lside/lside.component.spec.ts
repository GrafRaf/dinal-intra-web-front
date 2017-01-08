/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LsideComponent } from './lside.component';

describe('LsideComponent', () => {
  let component: LsideComponent;
  let fixture: ComponentFixture<LsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
