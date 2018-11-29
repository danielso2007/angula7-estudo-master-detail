import { CategoryService } from './../shared/category.service';
import { Component } from '@angular/core';
import { Category } from '../shared/category.model';
import { BaseListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends BaseListComponent<Category> {

  pageTitle = 'Categorias';

  constructor(protected categoryService: CategoryService) {
    super(categoryService);
  }

}
