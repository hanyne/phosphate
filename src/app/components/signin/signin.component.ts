import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  credentials = { email: '', password: '' };
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) { 

  }

  
  login(): void {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.error = error.error.message || 'Login failed. Please try again.';
      }
    );
  }
}
