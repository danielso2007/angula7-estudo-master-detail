import { EntryService } from './../shared/entry.service';
import { Component, OnInit } from '@angular/core';
import { Entry } from '../shared/entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = null;
  action = false;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.getAll().subscribe(
      entries => this.entries = entries,
      error => alert('Erro ao criar lista')
    );
  }

  deleteEntry(entry: Entry): void {
    this.action = true;
    const mustDelete = confirm('Deseja realmente excluir este item?');
    if (mustDelete) {
      this.entryService.delete(entry.id).subscribe(
        () => {
          this.entries = this.entries.filter(element => element !== entry);
          this.action = false;
        },
        error => { alert('Erro ao deletar categoria'); this.action = false; }
      );
    } else {
      this.action = false;
    }
  }

}
