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

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log(response);

        // Vérifier le rôle de l'utilisateur après la connexion réussie
        this.authService.getRole().subscribe(
          (role) => {
            if (role === 'formateur') {
              // Rediriger vers la page dashboard si l'utilisateur est un formateur
              this.router.navigate(['/dashboard']);
            } else {
              // Rediriger vers la page home pour d'autres types d'utilisateurs
              this.router.navigate(['/home']);
            }
          },
          (error) => {
            console.error('Error while fetching user role:', error);
            // Rediriger vers la page home en cas d'erreur
            this.router.navigate(['/home']);
          }
        );
      },
      (error) => {
        this.error = error.error.message || 'Login failed. Please try again.';
      }
    );
  }
}
