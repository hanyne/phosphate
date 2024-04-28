import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListeFormationComponent } from './components/formation/liste-formation/liste-formation.component';
import { EditFormationComponent } from './components/formation/edit-formation/edit-formation.component';
import { AddFormationComponent } from './components/formation/add-formation/add-formation.component';
import { ListeCategorieComponent } from './components/categorie/liste-categorie/liste-categorie.component';
import { EditCategorieComponent } from './components/categorie/edit-categorie/edit-categorie.component';
import { AddCategorieComponent } from './components/categorie/add-categorie/add-categorie.component';
import { ListeUtilisateurComponent } from './components/utilisateur/liste-utilisateur/liste-utilisateur.component';
import { EditUtilisateurComponent } from './components/utilisateur/edit-utilisateur/edit-utilisateur.component';
import { AddUtilisateurComponent } from './components/utilisateur/add-utilisateur/add-utilisateur.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'liste-formation', component: ListeFormationComponent },
  { path: 'edit-formation', component: EditFormationComponent },
  { path: 'add-formation', component: AddFormationComponent },
  { path: 'liste-catrgorie', component: ListeCategorieComponent },
  { path: 'edit-categorie', component: EditCategorieComponent },
  { path: 'add-categorie', component: AddCategorieComponent },
  { path: 'liste-user', component: ListeUtilisateurComponent },
  { path: 'edit-user', component: EditUtilisateurComponent },
  { path: 'add-user', component: AddUtilisateurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
