import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CicloDeVida } from './ciclo-de-vida';

describe('CicloDeVida', () => {
  let component: CicloDeVida;
  let fixture: ComponentFixture<CicloDeVida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CicloDeVida],
    }).compileComponents();

    fixture = TestBed.createComponent(CicloDeVida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
