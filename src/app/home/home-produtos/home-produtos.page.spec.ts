import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProdutosPage } from './home-produtos.page';

describe('HomeProdutosPage', () => {
  let component: HomeProdutosPage;
  let fixture: ComponentFixture<HomeProdutosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProdutosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
