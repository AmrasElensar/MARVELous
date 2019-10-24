import {Component, OnInit} from '@angular/core';
import {ComicCollection} from '../models/comic-collection';
import {MarvelComicsService} from '../services/marvel-comics.service';
import {Comic} from '../models/comic';
import {DialogConfig} from '../utilities/dialog-config';
import {CharacterDetailDialogComponent} from '../character-detail-dialog/character-detail-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {COMIC_ORDER_BY} from './comic-order-by';
import {COMIC_FILTERS} from './comic-filters';
import {ActivatedRoute} from '@angular/router';
import {CharacterCollection} from '../models/character-collection';
import {ComicDetailDialogComponent} from '../comic-detail-dialog/comic-detail-dialog.component';


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
  characterId: string;
  characterComicsUrl: string;
  characterName: string;

  constructor(private marvelComicService: MarvelComicsService,
              public matDialog: MatDialog,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.matDialog.closeAll();
    this.characterId = this.route.snapshot.params.characterId;
    if (this.characterId) {
      this.characterComicsUrl = `http://gateway.marvel.com/v1/public/characters/${this.characterId}/comics`;

      this.getComicPageForCharacter(1, 0);
    } else {
      this.getComicsPage(1, 0);
    }
  }

  getComics = () => {
    this.marvelComicService.getComics(this.pageSize, this.pageOffset, this.orderByProperty, this.filterProperty)
      .subscribe(this.setComicsAndPagingData);
  };

  getComicsForCharacter = () => {
    this.marvelComicService.getResource(this.characterComicsUrl, this.pageSize, this.pageOffset, this.orderByProperty, this.filterProperty)
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
    const openComicDetailDialogConfig = DialogConfig.createDialogConfig(dialogData);
    this.matDialog.open(ComicDetailDialogComponent, openComicDetailDialogConfig);
  };

  getComicsPage = (pageNumber: number, pageOffset: number) => {
    this.pageNumber = pageNumber;
    this.pageOffset = pageOffset.toString();
    this.getComics();
  };

  getComicPageForCharacter = (pageNumber: number, pageOffset: number) => {
    this.pageNumber = pageNumber;
    this.pageOffset = pageOffset.toString();
    this.getComicsForCharacter();
    this.getCharacterName();
  };

  getCharacterName = () => {
    this.marvelComicService.getCharacter(this.characterId).subscribe(this.setCharacterName);
  };

  setCharacterName = (characterCollection: CharacterCollection) => {
    this.characterName = characterCollection.data.results[0].name;
  };
}
