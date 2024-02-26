import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor( private http: HttpClient) { }

  getPlayers() {
    return this.http.get(environment.apiEndPoint + '/players')
  }
}
