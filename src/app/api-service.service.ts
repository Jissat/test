import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';
import { Shows } from './shows/shows';

@Injectable()
export class ApiService {
  public static readonly BoredApiAsyncPath =
    'https://www.boredapi.com/api/activity/';
  public static readonly ShowApi = 'https://api.tvmaze.com/search/shows?q=';
  public http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * @param accountId undefined
   * @return Success
   */
  GetBoredAPIAsyncResponse(): Observable<HttpResponse<any>> {
    let __headers = new HttpHeaders();
    let req = new HttpRequest<any>('GET', ApiService.BoredApiAsyncPath, {
      headers: __headers,
      responseType: 'json',
    });

    return this.http.request<any>(req).pipe(
      __filter((_r) => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as HttpResponse<any>;
      })
    );
  }

  GetBoredAPIAsync(): Observable<any> {
    return this.GetBoredAPIAsyncResponse().pipe(__map((_r) => _r.body));
  }

  GetShowsAPIAsyncResponse(text: string): Observable<HttpResponse<Shows[]>> {
    let __headers = new HttpHeaders();
    let req = new HttpRequest<any>('GET', `${ApiService.ShowApi}${text}`, {
      headers: __headers,
      responseType: 'json',
    });

    return this.http.request<any>(req).pipe(
      __filter((_r) => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as HttpResponse<Shows[]>;
      })
    );
  }

  GetShowsAPIAsync(text: string): Observable<Shows[]> {
    return this.GetShowsAPIAsyncResponse(text).pipe(__map((_r) => _r.body));
  }
}
