import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Training } from '../../model/training';
import { Category } from '../../model/category';
import { TrainingService } from '../../service/training.service';
import { CategoryService } from 'src/app/service/category.service';
import { EnrollmentService } from '../../service/enrollment.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  trainings: Training[] = [];
  trainingForm!: FormGroup;
  categories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private trainingService: TrainingService,
    private categoryService: CategoryService,
    private enrollmentService: EnrollmentService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getTrainings();
    this.getCategories();
  }

  initForm(): void {
    this.trainingForm = this.formBuilder.group({
      id: [null],
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: [null, Validators.required],
      date_start: ['', Validators.required],
      date_end: ['', Validators.required]
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const formData = this.trainingForm.value;
    if (formData.id) {
      this.updateTraining(formData);
    } else {
      this.createTraining(formData);
    }
  }

  createTraining(formData: Training): void {
    this.trainingService.createTraining(formData).subscribe(() => {
      this.getTrainings();
      this.trainingForm.reset();
    });
  }

  updateTraining(formData: Training): void {
    this.trainingService.updateTraining(formData).subscribe(
      updatedTraining => {
        const index = this.trainings.findIndex(t => t.id === updatedTraining.id);
        if (index !== -1) {
          this.trainings[index] = updatedTraining;
        }
        this.trainingForm.reset();
      },
      error => {
        console.error("Erreur lors de la mise à jour de la formation :", error);
      }
    );
  }
  
  getCategoryName(categoryId: number): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : ''; // Retourne le nom de la catégorie ou une chaîne vide si la catégorie n'est pas trouvée
  }
  

  getTrainings(): void {
    this.trainingService.getAllTrainings().subscribe(trainings => this.trainings = trainings);
  }

  deleteTraining(id: number): void {
    this.trainingService.deleteTraining(id).subscribe(() => {
      this.trainings = this.trainings.filter(t => t.id !== id);
    });
  }

  editTraining(id: number): void {
    this.trainingService.getTrainingById(id).subscribe(training => {
      this.trainingForm.patchValue(training);
    });
  }

  getCategories(): void {
    this.categoryService.getAllCategories().subscribe(categories => this.categories = categories);
  }
}
