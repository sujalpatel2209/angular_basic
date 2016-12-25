/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CollecationComponent } from './collecation.component';

describe('CollecationComponent', () => {
  let component: CollecationComponent;
  let fixture: ComponentFixture<CollecationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollecationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollecationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
