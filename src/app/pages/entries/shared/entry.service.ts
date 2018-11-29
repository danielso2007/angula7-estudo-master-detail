import { environment } from './../../../../environments/environment';
import { Entry } from './entry.model';
import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import { CategoryService } from '../../categories/shared/category.service';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private headersHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  private apiPath = environment.url_api + 'entries';

  constructor(private http: HttpClient, private categoryService: CategoryService) { }

  getAll(): Observable<Entry[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    );
  }

  getById(id: number): Observable<Entry> {
    const url = `${this.apiPath}/${id}`;
    return this.http.get(url, this.headersHttpOptions).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEntry)
    );
  }

  create(entry: Entry): Observable<Entry> {
    return this.categoryService.getById(entry.categoryId)
    .pipe(
      flatMap(
        category => {
          entry.category = category;
          return this.http.post(this.apiPath, entry, this.headersHttpOptions).pipe(
            catchError(this.handleError),
            map(this.jsonDataToEntry)
          );
        }
      )
    )
  }

  update(entry: Entry): Observable<Entry> {
    return this.categoryService.getById(entry.categoryId)
    .pipe(
      flatMap(
        category => {
          entry.category = category;
          return this.http.put(`${this.apiPath}/${entry.id}`, entry, this.headersHttpOptions).pipe(
            catchError(this.handleError),
            map(() => entry)
          );
        }
      )
    )
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiPath}/${id}`, this.headersHttpOptions).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }

  private jsonDataToCategories(jsonData: any[]): Entry[] {
    const entries: Entry[] = [];
    jsonData.forEach(element => entries.push(Object.assign(new Entry(), element)));
    return entries;
  }

  private jsonDataToEntry(jsonData: any): Entry {
    return Object.assign(new Entry(), jsonData);
  }

  private handleError(error: any): Observable<any> {
    console.error('ERRO NA REQUISIÇAO => ', error);
    return throwError(error);
  }
}
