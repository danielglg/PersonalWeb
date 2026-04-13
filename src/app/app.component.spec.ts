import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Title, Meta } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let titleService: Title;
  let metaService: Meta;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    titleService = TestBed.inject(Title);
    metaService = TestBed.inject(Meta);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as owner my name`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.owner).toEqual('Daniel Gómez-Lobo García');
  });

  it('should set the page title to the owner name', () => {
    TestBed.createComponent(AppComponent);
    expect(titleService.getTitle()).toEqual('Daniel Gómez-Lobo García');
  });

  it('should set the meta title tag with owner name and site descriptor', () => {
    TestBed.createComponent(AppComponent);
    const tag = metaService.getTag('name="title"');
    expect(tag).toBeTruthy();
    expect(tag!.content).toContain('Daniel Gómez-Lobo García');
    expect(tag!.content).toContain('Professional Website');
  });

  it('should set the meta keywords tag with relevant terms', () => {
    TestBed.createComponent(AppComponent);
    const tag = metaService.getTag('name="keywords"');
    expect(tag).toBeTruthy();
    const expectedKeywords = [
      'engineer', 'developer', 'software', 'professional',
      'CV', 'curriculum', 'portfolio', 'projects'
    ];
    expectedKeywords.forEach(keyword =>
      expect(tag!.content).toContain(keyword)
    );
  });
});
