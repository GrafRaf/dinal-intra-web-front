/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RsideComponent } from './rside.component';

describe('RsideComponent', () => {
  let component: RsideComponent;
  let fixture: ComponentFixture<RsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
