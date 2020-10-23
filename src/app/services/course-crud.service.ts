import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseCrudService {
  private apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  create(Course): Observable<Course> {
    return this.httpClient
      .post<Course>(
        this.apiServer + '/students/',
        JSON.stringify(Course),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  getById(id): Observable<Course> {
    return this.httpClient
      .get<Course>(this.apiServer + '/courses/' + id)
      .pipe(catchError(this.errorHandler));
  }

  getAll(): Observable<Course[]> {
    return this.httpClient
      .get<Course[]>(this.apiServer + '/courses/')
      .pipe(catchError(this.errorHandler));
  }

  update(id, Course): Observable<Course> {
    return this.httpClient
      .put<Course>(
        this.apiServer + '/courses/' + id,
        JSON.stringify(Course),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id) {
    return this.httpClient
      .delete<Course>(this.apiServer + '/courses/' + id, this.httpOptions)
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
