import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TricityCustomLibraryComponent } from './tricity-custom-library.component';

describe('TricityCustomLibraryComponent', () => {
  let component: TricityCustomLibraryComponent;
  let fixture: ComponentFixture<TricityCustomLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TricityCustomLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TricityCustomLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
