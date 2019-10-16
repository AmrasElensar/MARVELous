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

  constructor(private marvelComicService: MarvelComicsService) {
  }

  ngOnInit() {
    this.getCharacters(10, 0);
  }

  getCharacters = (pageSize?, pageOffset?) => {
    return this.marvelComicService.getCharacters(pageSize, pageOffset).subscribe(this.setCharacters);
  };

  setCharacters = (characters) => {
    this.characters = characters;
  };
}
