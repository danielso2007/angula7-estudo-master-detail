import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import toastr from 'toastr';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit, AfterContentChecked {

  currentAction: string;
  categoryForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;
  category: Category = null;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.setCurrentAction();
    this.buildCategoryForm();
    this.loadCategory();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  submitForm(): void {
    this.submittingForm = true;
    
    if (this.currentAction === 'new') {
      this.createCategory();
    } else {
      this.updateCategory();
    }
  }

  private createCategory(): void {
    const category: Category = Object.assign(new Category(), this.categoryForm.getRawValue());

    this.categoryService.create(category)
    .subscribe(
      category => this.actionsForSuccess(category),
      error => this.actionsForError(error)
    );
  }

  private actionsForSuccess(category: Category) {
    toastr.success('Solicitação processada com sucesso!');
    this.router.navigateByUrl('categories', {skipLocationChange: true})
        .then(
            () => this.router.navigate(['categories', category.id, 'edit'])
        );
  }

  private actionsForError(error: any) {
    toastr.error('Erro na solicitaçao!');
    console.error(error);
    this.submittingForm = false;
    if (error.status === 422) {
      this.serverErrorMessages = JSON.parse(error._body).errors;
    } else {
      this.serverErrorMessages = ['Falha na comunicação com o servidor. Por favor, tente mais tarde.'];
    }
  }

  private updateCategory(): void {
    const category: Category = Object.assign(new Category(), this.categoryForm.getRawValue());

    this.categoryService.update(category)
    .subscribe(
      category => this.actionsForSuccess(category),
      error => this.actionsForError(error)
    );
  }

  private setCurrentAction(): void {
    if (this.route.snapshot.url[0].path === 'new') {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  private buildCategoryForm(): void {
    this.categoryForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null]
    });
  }

  private loadCategory(): void {
    if (this.currentAction === 'edit') {
      this.route.paramMap.pipe(
        switchMap(params => this.categoryService.getById(Number(params.get('id'))))
      ).subscribe(
        (category) => {
          this.category = category;
          this.categoryForm.patchValue(category);
        },
        (error) => alert('Ocorreu um erro no servidor')
      );
    } else {
      this.category = new Category();
    }
  }

  private setPageTitle(): void {
    if (this.currentAction === 'new') {
      this.pageTitle = 'Cadastro de Nova Categoria';
    } else {
      const categoryName = this.category ? (this.category.name || '') : '';
      this.pageTitle = 'Editando Categoria: ' + categoryName;
    }
  }

}
