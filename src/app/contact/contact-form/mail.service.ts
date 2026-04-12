import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from './../../../environments/environment';

import { Message } from './message';

const httpOptions = {
  headers: new HttpHeaders({
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class MailService {

  private mailServiceUrl = environment.ApiBaseUrl + 'mail';

  constructor(private http: HttpClient) {}

  /**
   * Send the information introduced in the form by e-mail.
   */
  sendMail(message: Message): Observable<void> {
    return this.http
      .post<void>(this.mailServiceUrl, message, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('Error handler called');

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(() => new Error('Something bad happened; please try again later.'));
  };

}
