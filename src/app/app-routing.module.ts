import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditCategorieComponent } from './components/categorie/edit-categorie/edit-categorie.component';
import { AddCategorieComponent } from './components/categorie/add-categorie/add-categorie.component';
import { ListeUtilisateurComponent } from './components/utilisateur/liste-utilisateur/liste-utilisateur.component';
import { EditUtilisateurComponent } from './components/utilisateur/edit-utilisateur/edit-utilisateur.component';
import { AddUtilisateurComponent } from './components/utilisateur/add-utilisateur/add-utilisateur.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TrainingComponent } from './components/training/training.component';
import { CategoryComponent } from './components/category/category.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit-categorie', component: EditCategorieComponent },
  { path: 'add-categorie', component: AddCategorieComponent },
  { path: 'liste-user', component: ListeUtilisateurComponent },
  { path: 'edit-user', component: EditUtilisateurComponent },
  { path: 'add-user', component: AddUtilisateurComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'category', component: CategoryComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
