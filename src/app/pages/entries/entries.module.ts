import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EntryFormComponent, EntryListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EntriesRoutingModule
  ]
})
export class EntriesModule { }
