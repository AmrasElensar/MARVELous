import {Component, OnInit} from '@angular/core';
import {MarvelComicsService} from '../services/marvel-comics.service';
import {Characters} from '../models/character';

@Component({
  selector: 'app-character-overview',
  templateUrl: './character-overview.component.html',
  styleUrls: ['./character-overview.component.scss']
})
export class CharacterOverviewComponent implements OnInit {
  characters: Characters;
  pageNumber = 1;

  constructor(private marvelComicService: MarvelComicsService) {
  }

  ngOnInit() {
    this.getCharacters(1, '10', '0');
  }

  getCharacters = (pageNumber: number, pageSize?: string, pageOffset?: string) => {
    this.pageNumber = pageNumber;
    return this.marvelComicService.getCharacters(pageSize, pageOffset).subscribe(this.setCharacters);
  };

  setCharacters = (characters) => {
    this.characters = characters;
  };
}
