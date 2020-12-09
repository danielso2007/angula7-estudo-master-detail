import { Entry } from './entry.model';
import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Observable } from 'rxjs';
import { catchError, map, flatMap } from 'rxjs/operators';
import { CategoryService } from '../../categories/shared/category.service';

@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

  constructor(protected injector: Injector, private categoryService: CategoryService) {
    super(injector, 'entries', Entry);
  }

  create(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.create.bind(this));
  }

  update(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.update.bind(this));
  }

  private setCategoryAndSendToServer(object: Entry, fn: any): Observable<Entry> {
    return this.categoryService.getById(object.categoryId)
    .pipe(
      flatMap(
        category => {
          object.category = category;
          return fn(object);
        }
      ),
      catchError(this.handleError)
    )
  }

}
