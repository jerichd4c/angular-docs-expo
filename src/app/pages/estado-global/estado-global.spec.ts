import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoGlobal } from './estado-global';

describe('EstadoGlobal', () => {
  let component: EstadoGlobal;
  let fixture: ComponentFixture<EstadoGlobal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoGlobal],
    }).compileComponents();

    fixture = TestBed.createComponent(EstadoGlobal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
