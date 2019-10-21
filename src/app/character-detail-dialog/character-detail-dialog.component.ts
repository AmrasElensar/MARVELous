import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MarvelComicsService} from '../services/marvel-comics.service';
import {Character} from '../models/character';
import {ComicCollection} from '../models/comic-collection';

@Component({
  selector: 'app-character-detail-dialog',
  templateUrl: './character-detail-dialog.component.html',
  styleUrls: ['./character-detail-dialog.component.scss']
})
export class CharacterDetailDialogComponent implements OnInit {
  character: Character;
  characterThumbnailUrl: string;
  selectedComic: string;
  selectedStory: string;
  selectedSerie: string;

  constructor(@Inject(MAT_DIALOG_DATA) data,
              private marvelComicService: MarvelComicsService) {
    this.character = data.character;
    this.characterThumbnailUrl = `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`;
  }

  ngOnInit() {
  }

  getComicsForCharacter = (characterName: string, url: string) => {
    this.marvelComicService.getResource(url).subscribe(this.setComics);
  };

  setComics = (comicCollection: ComicCollection) => {

  };

  testLog = (event) => {
    console.log(event.value);
  };
}
