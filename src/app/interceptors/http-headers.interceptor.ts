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
        'Authorization': `Token ${environment.TOKEN}`, // Set the token header
        'Content-Type': 'application/json', // Set the Content-Type header
      },
      setParams: {
        key: environment.TOKEN,
      },
    });
    return next.handle(req);
  }
}
