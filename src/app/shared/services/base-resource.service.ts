import { BaseResourceModel } from "../models/base-resource.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { Injector } from "@angular/core";

export abstract class BaseResourceService<T extends BaseResourceModel> {

    protected headersHttpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    protected http: HttpClient;

    constructor(protected injector: Injector, protected apiPath: string) {
        this.apiPath = environment.url_api + this.apiPath;
        this.http = this.injector.get(HttpClient);
    }

    getAll(): Observable<T[]> {
        return this.http.get(this.apiPath).pipe(
            catchError(this.handleError),
            map(this.jsonDataToResources)
        );
    }

    getById(id: number): Observable<T> {
        const url = `${this.apiPath}/${id}`;
        return this.http.get(url, this.headersHttpOptions).pipe(
            catchError(this.handleError),
            map(this.jsonDataToResource)
        );
    }

    create(category: T): Observable<T> {
        return this.http.post(this.apiPath, category, this.headersHttpOptions).pipe(
            catchError(this.handleError),
            map(this.jsonDataToResource)
        );
    }

    update(category: T): Observable<T> {
        return this.http.put(`${this.apiPath}/${category.id}`, category, this.headersHttpOptions).pipe(
            catchError(this.handleError),
            map(() => category)
        );
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.apiPath}/${id}`, this.headersHttpOptions).pipe(
            catchError(this.handleError),
            map(() => null)
        );
    }

    protected jsonDataToResources(jsonData: any[]): T[] {
        const categories: T[] = [];
        jsonData.forEach(element => categories.push(element as T));
        return categories;
    }

    protected jsonDataToResource(jsonData: any): T {
        return jsonData as T;
    }

    protected handleError(error: any): Observable<any> {
        console.error('ERRO NA REQUISIÇAO => ', error);
        return throwError(error);
    }

}