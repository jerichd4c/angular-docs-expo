import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicadorTema } from './indicador-tema';

describe('IndicadorTema', () => {
  let component: IndicadorTema;
  let fixture: ComponentFixture<IndicadorTema>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicadorTema],
    }).compileComponents();

    fixture = TestBed.createComponent(IndicadorTema);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
