import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  error: string | null = null;

  constructor(private authService: AuthService) { }

  login(): void {
    this.authService.login(this.credentials).subscribe(
      () => {
        // Handle successful login
      },
      (error) => {
        this.error = error.error.message; // Assuming error response has a 'message' field
      }
    );
  }
}
