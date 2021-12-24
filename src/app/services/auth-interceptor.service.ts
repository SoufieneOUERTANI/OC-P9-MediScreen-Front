import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { from, Observable } from 'rxjs';
import { OktaAuth } from '@okta/okta-auth-js';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Promise<HttpEvent<any>> {
    // Only add an access token for secured endpoints
    const securedEndpoints_patient = ['http://localhost:8081'];
    const securedEndpoints_note = ['http://localhost:8082'];

    if (
      securedEndpoints_patient.some((url) =>
        request.urlWithParams.includes(url)
      ) ||
      securedEndpoints_note.some((url) => request.urlWithParams.includes(url))
    ) {
      // get access token
      const accessToken = await this.oktaAuth.getAccessToken();

      // clone the request and add new header with access token
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + accessToken,
        },
      });
    }

    return next.handle(request).toPromise();
  }
}
