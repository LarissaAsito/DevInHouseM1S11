import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlImagensComponent } from './url-imagens.component';

describe('UrlImagensComponent', () => {
  let component: UrlImagensComponent;
  let fixture: ComponentFixture<UrlImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlImagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
