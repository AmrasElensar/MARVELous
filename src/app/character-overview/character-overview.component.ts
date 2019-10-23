import {Component, OnInit} from '@angular/core';
import {MarvelComicsService} from '../services/marvel-comics.service';
import {Character} from '../models/character';
import {CharacterCollection} from '../models/character-collection';
import {DialogConfig} from '../utilities/dialog-config';
import {MatDialog} from '@angular/material';
import {CharacterDetailDialogComponent} from '../character-detail-dialog/character-detail-dialog.component';
import {CHARACTER_ORDER_BY} from './character-order-by';

@Component({
  selector: 'app-character-overview',
  templateUrl: './character-overview.component.html',
  styleUrls: ['./character-overview.component.scss']
})
export class CharacterOverviewComponent implements OnInit {
  characters: Character[];
  pageNumber = 1;
  pageSize = '10';
  pageOffset = '0';
  totalPages: number;
  orderBy = CHARACTER_ORDER_BY;
  orderByProperty = 'name';

  constructor(private marvelComicService: MarvelComicsService,
              public matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getCharacterPage(1, 0);
  }

  getCharacterPage = (pageNumber: number, pageOffset: number) => {
    this.pageNumber = pageNumber;
    this.pageOffset = pageOffset.toString();
    this.getCharacters();
  };

  getCharacters = () => {
    return this.marvelComicService.getCharacters(this.pageSize, this.pageOffset, this.orderByProperty)
      .subscribe(this.setCharactersAndPagingData);
  };

  setCharactersAndPagingData = (charactersCollection: CharacterCollection) => {
    this.characters = charactersCollection.data.results;
    this.totalPages = charactersCollection.data.total;
  };

  openCharacterDetailsDialog = (character: Character) => {
    const dialogData = {
      character
    };
    const openCharacterDetailDialogConfig = DialogConfig.createDialogConfig(dialogData);
    this.matDialog.open(CharacterDetailDialogComponent, openCharacterDetailDialogConfig);
  };
}
