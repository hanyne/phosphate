import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListeFormationComponent } from './components/formation/liste-formation/liste-formation.component';
import { AddFormationComponent } from './components/formation/add-formation/add-formation.component';
import { EditFormationComponent } from './components/formation/edit-formation/edit-formation.component';
import { ListeCategorieComponent } from './components/categorie/liste-categorie/liste-categorie.component';
import { AddCategorieComponent } from './components/categorie/add-categorie/add-categorie.component';
import { EditCategorieComponent } from './components/categorie/edit-categorie/edit-categorie.component';
import { ListeUtilisateurComponent } from './components/utilisateur/liste-utilisateur/liste-utilisateur.component';
import { EditUtilisateurComponent } from './components/utilisateur/edit-utilisateur/edit-utilisateur.component';
import { AddUtilisateurComponent } from './components/utilisateur/add-utilisateur/add-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ListeFormationComponent,
    AddFormationComponent,
    EditFormationComponent,
    ListeCategorieComponent,
    AddCategorieComponent,
    EditCategorieComponent,
    ListeUtilisateurComponent,
    EditUtilisateurComponent,
    AddUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
