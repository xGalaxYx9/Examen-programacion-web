import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConetidoComponent } from './conetido.component';

describe('ConetidoComponent', () => {
  let component: ConetidoComponent;
  let fixture: ComponentFixture<ConetidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConetidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConetidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
