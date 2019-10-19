import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {CharacterCollection} from '../models/character-collection';

@Injectable({
  providedIn: 'root'
})
export class MarvelComicsService {
  apiUrl = 'https://gateway.marvel.com';

  constructor(private http: HttpClient) {
  }

  getCharacters = (pageSize?: string, pageOffset?: string): Observable<CharacterCollection> => {
    const options = {
      params: {
        ...(pageSize ? {limit: pageSize} : {}),
        ...(pageOffset ? {offset: pageOffset} : {}),
        apikey: environment.API_KEY
      },
    };
    return this.http.get(`${this.apiUrl}/v1/public/characters`, options) as Observable<CharacterCollection>;
  };

  getResource<T>(url): Observable<T> {
    const options = {
      params: {
        apikey: environment.API_KEY
      },
    };
    return this.http.get(url, options) as Observable<T>;
  };
}
