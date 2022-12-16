import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemValidacaoComponent } from './item-validacao.component';

describe('ItemValidacaoComponent', () => {
  let component: ItemValidacaoComponent;
  let fixture: ComponentFixture<ItemValidacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemValidacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
