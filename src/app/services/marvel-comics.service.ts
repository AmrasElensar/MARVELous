import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {CharacterCollection} from '../models/character-collection';
import {ComicCollection} from '../models/comic-collection';
import {CreatorCollection} from '../models/creator-collection';

@Injectable({
  providedIn: 'root'
})
export class MarvelComicsService {
  apiUrl = 'https://gateway.marvel.com';

  constructor(private http: HttpClient) {
  }

  getCharacters = (pageSize?: string, pageOffset?: string, orderBy?: string): Observable<CharacterCollection> => {
    const options = {
      params: {
        ...(pageSize ? {limit: pageSize} : {}),
        ...(pageOffset ? {offset: pageOffset} : {}),
        ...(orderBy ? {orderBy} : {}),
        apikey: environment.API_KEY
      }
    };
    return this.http.get(`${this.apiUrl}/v1/public/characters`, options) as Observable<CharacterCollection>;
  };

  getCharacter = (characterId: string): Observable<CharacterCollection> => {
    const options = {
      params: {
        apikey: environment.API_KEY
      }
    };
    return this.http.get(`${this.apiUrl}/v1/public/characters/${characterId}`, options) as Observable<CharacterCollection>;
  };

  getComics = (pageSize?: string, pageOffset?: string, orderBy?: string, format?: string): Observable<ComicCollection> => {
    const options = {
      params: {
        ...(pageSize ? {limit: pageSize} : {}),
        ...(pageOffset ? {offset: pageOffset} : {}),
        ...(orderBy ? {orderBy} : {}),
        ...(format ? {format} : {}),
        apikey: environment.API_KEY
      }
    };
    return this.http.get(`${this.apiUrl}/v1/public/comics`, options) as Observable<ComicCollection>;
  };

  getCreators = (pageSize?: string, pageOffset?: string, orderBy?: string): Observable<CreatorCollection> => {
    const options = {
      params: {
        ...(pageSize ? {limit: pageSize} : {}),
        ...(pageOffset ? {offset: pageOffset} : {}),
        ...(orderBy ? {orderBy} : {}),
        apikey: environment.API_KEY
      }
    };
    return this.http.get(`${this.apiUrl}/v1/public/creators`, options) as Observable<CreatorCollection>;
  };

  getResource<T>(url, pageSize?: string, pageOffset?: string, orderBy?: string, format?: string): Observable<T> {
    const options = {
      params: {
        ...(pageSize ? {limit: pageSize} : {}),
        ...(pageOffset ? {offset: pageOffset} : {}),
        ...(orderBy ? {orderBy} : {}),
        ...(format ? {format} : {}),
        apikey: environment.API_KEY
      },
    };
    return this.http.get(url, options) as Observable<T>;
  };
}
