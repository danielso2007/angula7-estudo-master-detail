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
    super(injector, 'entries');
  }

  create(entry: Entry): Observable<Entry> {
    return this.categoryService.getById(entry.categoryId)
    .pipe(
      flatMap(
        category => {
          entry.category = category;
          return super.create(entry);
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
          return super.update(entry);
        }
      )
    )
  }

}
