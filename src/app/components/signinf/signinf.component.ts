import { Component } from '@angular/core';
import { FormateurService } from '../../service/formateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signinf',
  templateUrl: './signinf.component.html',
  styleUrls: ['./signinf.component.css']
})
export class SigninfComponent {
  credentials = { email: '', password: '' };
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private formateurLoginService: FormateurService, private router: Router) {}

  login() {
    this.formateurLoginService.login(this.email, this.password).subscribe(
      response => {
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
        this.router.navigate(['/dashboard']);  // Change to the appropriate route
      },
      error => {
        this.errorMessage = 'Invalid credentials or not a formateur';
      }
    );
  }
}
