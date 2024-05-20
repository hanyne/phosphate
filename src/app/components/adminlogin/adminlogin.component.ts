import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Rediriger vers l'URL de connexion de Django
    window.location.href = 'http://127.0.0.1:8000/admin/login/?next=/admin/';
  }
}
