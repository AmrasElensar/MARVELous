import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Comic} from '../models/comic';

@Component({
  selector: 'app-comic-detail-dialog',
  templateUrl: './comic-detail-dialog.component.html',
  styleUrls: ['./comic-detail-dialog.component.scss']
})
export class ComicDetailDialogComponent implements OnInit {
  comic: Comic;
  comicThumbnailUrl: string;
  detailUrl: string;
  purchaseUrl: string;
  readerUrl: string;
  printPrice: number;
  digitalPrice: number;

  constructor(@Inject(MAT_DIALOG_DATA) data,
              public dialogRef: MatDialogRef<ComicDetailDialogComponent>) {
    this.comic = data.comic;
  }

  ngOnInit() {
    this.comicThumbnailUrl = `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`;
    this.setUrls();
    this.setPrices();
  }

  setUrls = () => {
    const detailUrl = this.comic.urls.filter(url => url.type === 'detail')[0];
    const purchaseUrl = this.comic.urls.filter(url => url.type === 'purchase')[0];
    const readerUrl = this.comic.urls.filter(url => url.type === 'reader')[0];

    if (detailUrl) {
      this.detailUrl = detailUrl.url;
    }
    if (purchaseUrl) {
      this.purchaseUrl = purchaseUrl.url;
    }
    if (readerUrl) {
      this.readerUrl = readerUrl.url;
    }
  };

  setPrices = () => {
    this.printPrice = this.comic.prices.filter(url => url.type === 'printPrice')[0].price || undefined;
    this.digitalPrice = this.comic.prices.filter(url => url.type === 'digitalPurchasePrice')[0].price || undefined;
  };

  closeDialog = () => {
    this.dialogRef.close();
  };
}
