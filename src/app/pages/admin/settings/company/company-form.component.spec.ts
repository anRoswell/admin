import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyFormComponent } from './company-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CompanyFormComponent | Prueba Testing', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      declarations: [CompanyFormComponent],
    }).compileComponents();
  }));

  it('Valida campo "name" del formulario, si es valido o no ', () => {
    const fixture = TestBed.createComponent(CompanyFormComponent);
    const app = fixture.componentInstance;
    expect(app.isValid('name')).toBeFalse();
  });
  it('Valida campo "alias" del formulario, si es valido o no ', () => {
    const fixture = TestBed.createComponent(CompanyFormComponent);
    const app = fixture.componentInstance;
    expect(app.isValid('alias')).toBeFalse();
  });
  it('Valida campo "identificationTypeId" del formulario, si es valido o no ', () => {
    const fixture = TestBed.createComponent(CompanyFormComponent);
    const app = fixture.componentInstance;
    expect(app.isValid('identificationTypeId')).toBeFalse();
  });
  it('Valida campo "identificationNumber" del formulario, si es valido o no ', () => {
    const fixture = TestBed.createComponent(CompanyFormComponent);
    const app = fixture.componentInstance;
    expect(app.isValid('identificationNumber')).toBeFalse();
  });
  it('Valida si la variable "title" esta definida ', () => {
    const fixture = TestBed.createComponent(CompanyFormComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBeDefined();
  });
  it('Valida si la variable "id" esta indefinida ', () => {
    const fixture = TestBed.createComponent(CompanyFormComponent);
    const app = fixture.componentInstance;
    expect(app.id).toBeUndefined();
  });
});
