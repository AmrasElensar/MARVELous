import {Component, OnInit} from '@angular/core';
import {MarvelComicsService} from '../services/marvel-comics.service';
import {Character} from '../models/character';
import {CharacterCollection} from '../models/character-collection';
import {Comic} from '../models/comic';
import {ComicCollection} from '../models/comic-collection';

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
  characterNameForComicsOnScope: string;

  constructor(private marvelComicService: MarvelComicsService) {
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

  getComicsForCharacter = (characterName: string, url: string) => {
    this.characterNameForComicsOnScope = characterName;
    this.marvelComicService.getResource(url).subscribe(this.setComics);
  };

  setComics = (comicCollection: ComicCollection) => {
    this.comics = comicCollection.data.results;
  };
}
