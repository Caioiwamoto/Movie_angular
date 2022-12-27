import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '8beb21f2bab21912afb2832ab1cf44f1';
    this.language = 'en-US';
    this.region = 'US';
  }

  getTvOnTheAir(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/on_the_air?api_key=${this.apiKey}&page=${page}&language=${this.language}`);
  }

  getTVAiringToday(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/airing_today?api_key=${this.apiKey}&page=${page}&language=${this.language}`);
  }

  getPopularTVShow(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}`);
  }

  getTopRatedTVShows(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}`);
  }

  getTVShow(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/${id}?api_key=${this.apiKey}&language=${this.language}`);
  }

  getTvVideos(id: any) {
    return this.http.get(`${this.baseUrl}tv/${id}/videos?api_key=${this.apiKey}&language=${this.language}`);
  }

  getTvBackdropsImages(id: string) {
    return this.http.get(`${this.baseUrl}tv/${id}/images?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string) {
    return this.http.get(`${this.baseUrl}tv/${id}/credits?api_key=${this.apiKey}&language=${this.language}`);
  }

  getRecomendTv(id: string) {
    return this.http.get(`${this.baseUrl}tv/${id}/recommendations?api_key=${this.apiKey}&language=${this.language}`);
  }

  searchtv(searchStr: string): Observable<any> {
    return this.http.get(`${this.baseUrl}search/tv?api_key=${this.apiKey}&query=${searchStr}`);
  }

}
