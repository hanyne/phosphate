import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ListeCategorieComponent,
    AddCategorieComponent,
    EditCategorieComponent,
    ListeUtilisateurComponent,
    EditUtilisateurComponent,
    AddUtilisateurComponent,
    TrainingComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
