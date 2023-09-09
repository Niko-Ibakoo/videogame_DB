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
        'X-RapidAPI-Key': environment.RAPID_API_KEY,
        'X-RapidAPI-Host': environment.API_URL,
      },
      setParams: {
        key: environment.API_KEY,
      },
    });
    return next.handle(req);
  }
}
