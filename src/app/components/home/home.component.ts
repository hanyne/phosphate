import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Training } from '../../model/training';
import { Category } from '../../model/category';
import { TrainingService } from '../../service/training.service';
import { CategoryService } from 'src/app/service/category.service';
import { EnrollmentService } from '../../service/enrollment.service';
import { AuthService } from 'src/app/service/auth.service';
import { HttpErrorResponse } from '@angular/common/http'; // Ajout de HttpErrorResponse pour gérer les erreurs HTTP
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trainings: Training[] = [];
  trainingForm!: FormGroup;
  categories: Category[] = [];
  isLoggedIn = false;

  constructor(
    private formBuilder: FormBuilder,
    private trainingService: TrainingService,
    private categoryService: CategoryService,
    private enrollmentService: EnrollmentService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkLoginStatus();
    this.initForm();
    this.getTrainings();
    this.getCategories();
  }

  checkLoginStatus(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
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
    if (formData.category && formData.category.id) {
      if (formData.id) {
        this.updateTraining(formData);
      } else {
        formData.category = formData.category.id;
        this.createTraining(formData);
      }
    } else {
      console.error('Category not found');
    }
  }
  
  createTraining(formData: Training): void {
    this.trainingService.createTraining(formData).subscribe(() => {
      this.getTrainings();
      this.trainingForm.reset();
    });
  }
  
  updateTraining(formData: Training): void {
    this.trainingService.updateTraining(formData).subscribe(() => {
      this.getTrainings();
      this.trainingForm.reset();
    });
  }

  getTrainings(): void {
    this.trainingService.getAllTrainings().subscribe(
      trainings => this.trainings = trainings,
      (error: HttpErrorResponse) => {
        console.error("Erreur lors de la récupération des formations:", error.statusText);
        // Gérer l'erreur HTTP de manière appropriée
        // Par exemple, afficher un message d'erreur à l'utilisateur
      }
    );
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
  
  enroll(trainingId: number): void {
    if (!this.authService.isLoggedIn()) {
      console.error("L'utilisateur n'est pas connecté.");
      return;
    }
  
    this.enrollmentService.enroll(trainingId).subscribe(
      () => {
        console.log("Inscription réussie à la formation avec l'ID:", trainingId);
        this.getTrainings();
      },
      (error: HttpErrorResponse) => {
        console.error("Erreur lors de l'inscription à la formation avec l'ID:", trainingId, error.statusText);
        if (error.status === 404) {
          alert("La formation que vous essayez de rejoindre n'existe pas.");
        } else if (error.status === 400) {
          alert("Vous êtes déjà inscrit à cette formation.");
        } else {
          alert("Inscription réussie à la formation");
        }
      }
    );
  }

  logout(): void {
    this.authService.logout();
  }
  viewTrainingDetails(trainingId: number): void {
    this.router.navigate(['/training', trainingId]);
  }
}
