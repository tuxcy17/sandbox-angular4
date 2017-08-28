import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Poi } from '../entity/poi';

@Injectable()
export class PoiService {
  private poisUrl = 'api/pois';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  create(poi: Poi): Promise<Poi> {
    const url = this.poisUrl;
    return this.http
      .post(url, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Poi)
      .catch(this.handleError);
  }

  update(poi: Poi): Promise<Poi> {
    const url = `${this.poisUrl}/${poi.id}`;
    return this.http
      .put(url, JSON.stringify(poi), {headers: this.headers})
      .toPromise()
      .then(() => poi)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.poisUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getPois(poi: Poi): Promise<Poi[]> {
    const url = this.poisUrl;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Poi[])
      .catch(this.handleError);
  }

  getPoi(id: number): Promise<Poi> {
    const url = `${this.poisUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Poi)
      .catch(this.handleError);
  }
}
