import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Characters} from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class MarvelComicsService {
  apiUrl = 'https://gateway.marvel.com';

  constructor(private http: HttpClient) {
  }

  getCharacters = (pageSize?: string, pageOffset?: string): Observable<any> => {
    const options = {
      params: {
        ...(pageSize ? {limit: pageSize} : {}),
        ...(pageOffset ? {offset: pageOffset} : {}),
        apikey: environment.API_KEY
      },
    };
    return this.http.get(`${this.apiUrl}/v1/public/characters`, options);
  };
}
