import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAluno } from './cad-aluno';

describe('CadAluno', () => {
  let component: CadAluno;
  let fixture: ComponentFixture<CadAluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadAluno],
    }).compileComponents();

    fixture = TestBed.createComponent(CadAluno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
