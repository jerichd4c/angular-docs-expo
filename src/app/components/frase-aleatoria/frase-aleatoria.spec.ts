import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FraseAleatoria } from './frase-aleatoria';

describe('FraseAleatoria', () => {
  let component: FraseAleatoria;
  let fixture: ComponentFixture<FraseAleatoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FraseAleatoria],
    }).compileComponents();

    fixture = TestBed.createComponent(FraseAleatoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
