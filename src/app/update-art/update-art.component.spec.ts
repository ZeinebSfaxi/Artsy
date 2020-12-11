import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArtComponent } from './update-art.component';

describe('UpdateArtComponent', () => {
  let component: UpdateArtComponent;
  let fixture: ComponentFixture<UpdateArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
