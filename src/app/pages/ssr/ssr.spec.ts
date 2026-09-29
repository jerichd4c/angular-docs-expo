import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ssr } from './ssr';

describe('Ssr', () => {
  let component: Ssr;
  let fixture: ComponentFixture<Ssr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ssr],
    }).compileComponents();

    fixture = TestBed.createComponent(Ssr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
