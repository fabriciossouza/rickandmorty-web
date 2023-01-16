import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CharactersService {
  private BASE_URL = 'https://rickandmorty-api.herokuapp.com/api'

  constructor(private http: HttpClient) { }

  getCharacters(params = {}) {
    return this.http.get(`${this.BASE_URL}/character`, { params });
  }

  getCharacterDetails(id: number) {
    return this.http.get(`${this.BASE_URL}/character/${id}`);
  }
}
