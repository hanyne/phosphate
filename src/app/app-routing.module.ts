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
import { FormateurComponent } from './components/formateur/formateur.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AboutComponent } from './components/about/about.component';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit-categorie', component: EditCategorieComponent },
  { path: 'add-categorie', component: AddCategorieComponent },
  { path: 'liste-user', component: ListeUtilisateurComponent },
  { path: 'edit-user', component: EditUtilisateurComponent },
  { path: 'add-user', component: AddUtilisateurComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'formateur', component: FormateurComponent },
  { path: 'emp', component: EmployeeListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminloginComponent },
  { path: 'about', component: AboutComponent },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
