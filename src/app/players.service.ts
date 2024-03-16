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
    return this.http.get(environment.apiEndPoint + '/players');
  }

  setRanks(playerData: any) {
    return this.http.post(environment.apiEndPoint + '/setRanks', playerData);
  }

  setTiers(tierData: any, position:string | null) {
    const params = new HttpParams().append("pos", position ? position : '');
    return this.http.post(environment.apiEndPoint + '/setTiers', tierData, {params});
  }
}
