import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeGusta } from './me-gusta';

describe('MeGusta', () => {
  let component: MeGusta;
  let fixture: ComponentFixture<MeGusta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeGusta],
    }).compileComponents();

    fixture = TestBed.createComponent(MeGusta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
