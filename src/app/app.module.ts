import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListeCategorieComponent } from './components/categorie/liste-categorie/liste-categorie.component';
import { AddCategorieComponent } from './components/categorie/add-categorie/add-categorie.component';
import { EditCategorieComponent } from './components/categorie/edit-categorie/edit-categorie.component';
import { ListeUtilisateurComponent } from './components/utilisateur/liste-utilisateur/liste-utilisateur.component';
import { EditUtilisateurComponent } from './components/utilisateur/edit-utilisateur/edit-utilisateur.component';
import { AddUtilisateurComponent } from './components/utilisateur/add-utilisateur/add-utilisateur.component';
import { TrainingComponent } from './components/training/training.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './components/category/category.component';
import { FormateurComponent } from './components/formateur/formateur.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AboutComponent } from './components/about/about.component';
import { WebcamCaptureComponent } from './webcam-capture/webcam-capture.component';
import { WebcamModule } from 'ngx-webcam';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { RoleComponent } from './components/role/role.component';
import { SigninfComponent } from './components/signinf/signinf.component'; 
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    ListeCategorieComponent,
    AddCategorieComponent,
    EditCategorieComponent,
    ListeUtilisateurComponent,
    EditUtilisateurComponent,
    AddUtilisateurComponent,
    TrainingComponent,
    CategoryComponent,
    FormateurComponent,
    EmployeeListComponent,
    HomeComponent,
    SigninComponent,
    AdminloginComponent,
    AboutComponent,
    WebcamCaptureComponent,
    TrainingDetailComponent,
    RoleComponent,
    SigninfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    WebcamModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
