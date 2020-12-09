import { EntryService } from './../shared/entry.service';
import { Component } from '@angular/core';
import { Entry } from '../shared/entry.model';
import { BaseListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent extends BaseListComponent<Entry> {

  pageTitle = 'Lançamentos';

  constructor(protected entryService: EntryService) {
    super(entryService);
  }

}

