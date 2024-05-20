import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formateur } from '../../model/formateur';
import { FormateurService } from '../../service/formateur.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  formateurs: Formateur[] = [];
  formateurForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private formateurService: FormateurService) { }

  ngOnInit(): void {
    this.initForm();
    this.getFormateurs();
  }

  initForm(): void {
    this.formateurForm = this.formBuilder.group({
      id: [null],
      user: this.formBuilder.group({
        id: [null],
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required]
      }),
      expertise: ['', Validators.required],
      bio: ['']
    });
  }

  onSubmit(): void {
    const formData = this.formateurForm.value;
    if (formData.id) {
      this.updateFormateur(formData);
    } else {
      this.createFormateur(formData);
    }
  }

  createFormateur(formateur: Formateur): void {
    this.formateurService.addFormateur(formateur).subscribe(() => {
      this.getFormateurs();
      this.formateurForm.reset();
    });
  }

  updateFormateur(formateur: Formateur): void {
    if (formateur.id !== undefined) {
      this.formateurService.updateFormateur(formateur.id, formateur).subscribe(() => {
        this.getFormateurs();
        this.formateurForm.reset();
      });
    }
  }

  getFormateurs(): void {
    this.formateurService.getFormateurs().subscribe(formateurs => this.formateurs = formateurs);
  }

  deleteFormateur(id: number | undefined): void {
    if (id !== undefined) {
      this.formateurService.deleteFormateur(id).subscribe(() => {
        this.formateurs = this.formateurs.filter(f => f.id !== id);
      });
    }
  }

  editFormateur(id: number | undefined): void {
    if (id !== undefined) {
      this.formateurService.getFormateur(id).subscribe(formateur => {
        this.formateurForm.patchValue(formateur);
      });
    }
  }
}
