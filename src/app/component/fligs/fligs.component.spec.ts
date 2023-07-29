import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FligsComponent } from './fligs.component';

describe('FligsComponent', () => {
  let component: FligsComponent;
  let fixture: ComponentFixture<FligsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FligsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FligsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
