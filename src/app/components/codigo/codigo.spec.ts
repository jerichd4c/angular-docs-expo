import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Codigo } from './codigo';

describe('Codigo', () => {
  let component: Codigo;
  let fixture: ComponentFixture<Codigo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Codigo],
    }).compileComponents();

    fixture = TestBed.createComponent(Codigo);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('codigo', 'ng serve');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the given code', () => {
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('ng serve');
  });
});
