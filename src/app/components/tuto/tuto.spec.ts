import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuto } from './tuto';

describe('Tuto', () => {
  let component: Tuto;
  let fixture: ComponentFixture<Tuto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tuto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tuto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
