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

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.error = null; // Réinitialisez l'erreur à null avant de tenter de se connecter
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log(response);
        // Rediriger vers la page précédente ou vers une autre page après la connexion réussie
        const redirectUrl = this.router.routerState.snapshot.url || '/dashboard';
        this.router.navigateByUrl(redirectUrl);
      },
      (error) => {
        this.error = error.error.message || 'Login failed. Please try again.';
      }
    );
  }
}
