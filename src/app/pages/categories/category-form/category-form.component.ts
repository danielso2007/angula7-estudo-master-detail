import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent extends BaseResourceFormComponent<Category> {

  pageTitle = 'Cadastro de nova categoria';

  constructor(
    protected categoryService: CategoryService,
    protected injector: Injector
  ) { super(categoryService, injector) }

  buildForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null]
    });
  }

  protected creationPageTitle(): string {
    return "Cadastro de nova categoria";
  }

  protected editionPageTitle(): string {
    const name = this.resource ? (this.resource.name || '') : '';
    return `Editando categoria: ${name}`;
  }

}
