// category.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../model/category';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  categoryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.initForm();
    this.getCategories();
  }

  initForm(): void {
    this.categoryForm = this.formBuilder.group({
      id: [null],
      name: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const formData = this.categoryForm.value;
    if (formData.id) {
      this.updateCategory(formData);
    } else {
      this.createCategory(formData);
    }
  }

  createCategory(formData: Category): void {
    this.categoryService.createCategory(formData)
      .subscribe(() => {
        this.getCategories();
        this.categoryForm.reset();
      });
  }

  updateCategory(formData: Category): void {
    this.categoryService.updateCategory(formData)
      .subscribe(() => {
        this.getCategories();
        this.categoryForm.reset();
      });
  }

  getCategories(): void {
    this.categoryService.getAllCategories()
      .subscribe(categories => this.categories = categories);
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id)
      .subscribe(() => {
        this.categories = this.categories.filter(c => c.id !== id);
      });
  }

  editCategory(id: number): void {
    this.categoryService.getCategoryById(id)
      .subscribe(category => {
        this.categoryForm.patchValue(category);
      });
  }
}
