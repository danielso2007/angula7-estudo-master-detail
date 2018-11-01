import { CategoryService } from './../shared/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = null;
  action = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories,
      error => alert('Erro ao criar lista')
    );
  }

  deleteCategory(category: Category): void {
    this.action = true;
    const mustDelete = confirm('Deseja realmente excluir este item?');
    if (mustDelete) {
      this.categoryService.delete(category.id).subscribe(
        () => {
          this.categories = this.categories.filter(element => element !== category);
          this.action = false;
        },
        error => { alert('Erro ao deletar categoria'); this.action = false; }
      );
    } else {
      this.action = false;
    }
  }

}
