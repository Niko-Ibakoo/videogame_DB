import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': '23e99dc30amsh9a72364ad5de69cp155bbcjsn5e98a675ba7e',
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: environment.API_KEY,
      },
    });
    return next.handle(req);
  }
}
