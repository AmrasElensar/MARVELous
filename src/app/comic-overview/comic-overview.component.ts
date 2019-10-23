import {Component, OnInit} from '@angular/core';
import {ComicCollection} from '../models/comic-collection';
import {MarvelComicsService} from '../services/marvel-comics.service';
import {Comic} from '../models/comic';
import {DialogConfig} from '../utilities/dialog-config';
import {CharacterDetailDialogComponent} from '../character-detail-dialog/character-detail-dialog.component';
import {MatDialog} from '@angular/material';
import {COMIC_ORDER_BY} from './comic-order-by';
import {COMIC_FILTERS} from './comic-filters';


@Component({
  selector: 'app-comic-overview',
  templateUrl: './comic-overview.component.html',
  styleUrls: ['./comic-overview.component.scss']
})
export class ComicOverviewComponent implements OnInit {
  comics: Comic[];
  pageNumber = 1;
  pageSize = '12';
  pageOffset = '0';
  orderByProperty = 'title';
  filterProperty: string;
  totalPages: number;
  searchTerm: string;
  orderBy = COMIC_ORDER_BY;
  filterBy = COMIC_FILTERS;

  constructor(private marvelComicService: MarvelComicsService,
              public matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getComicsPage(1, 0);
  }

  getComics = () => {
    this.marvelComicService.getComics(this.pageSize, this.pageOffset, this.orderByProperty, this.filterProperty)
      .subscribe(this.setComicsAndPagingData);
  };

  setComicsAndPagingData = (comicCollection: ComicCollection) => {
    this.comics = comicCollection.data.results;
    this.totalPages = comicCollection.data.total;
  };

  openComicDetailsDialog = (comic: Comic) => {
    const dialogData = {
      comic
    };
    const openCharacterDetailDialogConfig = DialogConfig.createDialogConfig(dialogData);
    this.matDialog.open(CharacterDetailDialogComponent, openCharacterDetailDialogConfig);
  };

  getComicsPage = (pageNumber: number, pageOffset: number) => {
    this.pageNumber = pageNumber;
    this.pageOffset = pageOffset.toString();
    this.getComics();
  }
}
