// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) { 

  }

  
  login(): void {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.error = error.error.message || 'Login failed. Please try again.';
      }
    );
  }
}
