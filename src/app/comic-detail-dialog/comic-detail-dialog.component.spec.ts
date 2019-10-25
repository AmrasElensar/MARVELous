import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDetailDialogComponent } from './comic-detail-dialog.component';

describe('ComicDetailDialogComponent', () => {
  let component: ComicDetailDialogComponent;
  let fixture: ComponentFixture<ComicDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
