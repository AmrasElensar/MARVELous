import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailDialogComponent } from './character-detail-dialog.component';

describe('CharacterDetailDialogComponent', () => {
  let component: CharacterDetailDialogComponent;
  let fixture: ComponentFixture<CharacterDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
