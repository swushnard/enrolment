import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Student } from '../models/student';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentCrudService {
  private apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  create(Student): Observable<Student> {
    return this.httpClient
      .post<Student>(
        this.apiServer + '/students/',
        JSON.stringify(Student),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  getById(id): Observable<Student> {
    return this.httpClient
      .get<Student>(this.apiServer + '/students/' + id)
      .pipe(catchError(this.errorHandler));
  }

  getAll(): Observable<Student[]> {
    return this.httpClient
      .get<Student[]>(this.apiServer + '/students/')
      .pipe(catchError(this.errorHandler));
  }

  update(id, student): Observable<Student> {
    return this.httpClient
      .put<Student>(
        this.apiServer + '/students/' + id,
        JSON.stringify(student),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id) {
    return this.httpClient
      .delete<Student>(this.apiServer + '/students/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
