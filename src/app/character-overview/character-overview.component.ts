import {Component, OnInit} from '@angular/core';
import {MarvelComicsService} from '../services/marvel-comics.service';
import {Character} from '../models/character';
import {CharacterCollection} from '../models/character-collection';
import {Comic} from '../models/comic';
import {DialogConfig} from '../utilities/dialog-config';
import {MatDialog} from '@angular/material';
import {CharacterDetailDialogComponent} from '../character-detail-dialog/character-detail-dialog.component';

@Component({
  selector: 'app-character-overview',
  templateUrl: './character-overview.component.html',
  styleUrls: ['./character-overview.component.scss']
})
export class CharacterOverviewComponent implements OnInit {
  characters: Character[];
  comics: Comic[] = [];
  pageNumber = 1;
  totalPages: number;

  constructor(private marvelComicService: MarvelComicsService,
              public matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getCharacters(1, '10', '0');
  }

  getCharacters = (pageNumber: number, pageSize?: string, pageOffset?: string) => {
    this.pageNumber = pageNumber;
    return this.marvelComicService.getCharacters(pageSize, pageOffset).subscribe(this.setCharactersAndPagingData);
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
