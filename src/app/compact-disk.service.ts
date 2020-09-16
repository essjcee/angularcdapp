import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CompactDisk } from './models/compactdisk';

@Injectable({
  providedIn: 'root'
})
export class CompactDiskService {
  apiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/api/compactdiscs/';
  }

  getCDs(): Observable<CompactDisk[]> {
    return this.http.get<CompactDisk[]>(this.apiUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getCD(id: string): Observable<CompactDisk> {
    return this.http.get<CompactDisk>(this.apiUrl + id)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  saveCompactDisk(CompactDisk): Observable<CompactDisk> {
    return this.http.post<CompactDisk>(this.apiUrl, JSON.stringify(CompactDisk), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  updateCompactDist(id: string, CompactDisk): Observable<CompactDisk> {
    return this.http.put<CompactDisk>(this.apiUrl + id, JSON.stringify(CompactDisk), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  deleteCompactDisk(id: string): void{
    this.http.delete(this.apiUrl + id).subscribe();
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
