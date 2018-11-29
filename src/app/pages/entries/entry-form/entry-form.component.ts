import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { Entry } from '../shared/entry.model';
import { EntryService } from '../shared/entry.service';
import { Category } from '../../categories/shared/category.model';
import { CategoryService } from '../../categories/shared/category.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent extends BaseResourceFormComponent<Entry> {

  categories: Array<Category>;

  imaskConfig = {
    mask: Number,
    scale: 2,
    trousandsSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ','
  }

  ptBR = {
    firstDayOfWeek: 0,
    dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    dayNamesMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
    monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    today: 'Hoje',
    clear: 'Limpar'
  }

  constructor(
    protected categoryService: CategoryService,
    protected entryService: EntryService,
    protected injector: Injector
  ) { super(entryService, injector) }

  buildForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null],
      type: [Entry.types.expense, [Validators.required]],
      amount: [null, [Validators.required]],
      date: [null, [Validators.required]],
      paid: [true, [Validators.required]],
      categoryId: [null, [Validators.required]]
    });
  }

  protected creationPageTitle(): string {
    return "Cadastro de novo lançamento";
  }

  protected editionPageTitle(): string {
    const name = this.resource ? (this.resource.name || '') : '';
    return `Editando lançamento: ${name}`;
  }

  ngOnInit() {
    this.loadCategories();
    super.ngOnInit();
  }

  afterLoad(resource: Entry): Entry {
    resource.date = new Date(resource.date);
    return resource;
  }

  get typeOptions(): Array<any> {
    return Object.entries(Entry.types).map(
      ([value, text]) => {
        return {
          text: text,
          value: value
        }
      }
    );
  }

  private loadCategories(): void {
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories
    );
  }

}
