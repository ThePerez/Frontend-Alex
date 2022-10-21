import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { provideStorage, getStorage } from "@angular/fire/storage";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgCircleProgressModule } from "ng-circle-progress";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AcercaDeComponent } from "./components/acerca-de/acerca-de.component";
import { EditAcercaDeComponent } from "./components/acerca-de/edit-acerca-de.component";
import { BannerComponent } from "./components/banner/banner.component";
import { EditeducacionComponent } from "./components/educacion/editeducacion.component";
import { EducacionComponent } from "./components/educacion/educacion.component";
import { NeweducacionComponent } from "./components/educacion/neweducacion.component";
import { EditExperienciaComponent } from "./components/experiencia/edit-experiencia.component";
import { ExperienciaComponent } from "./components/experiencia/experiencia.component";
import { NewExperienciaComponent } from "./components/experiencia/new-experiencia.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { EditSkillComponent } from "./components/hys/edit-skill.component";
import { HysComponent } from "./components/hys/hys.component";
import { NewSkillComponent } from "./components/hys/new-skill.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoAPComponent } from "./components/logo-ap/logo-ap.component";
import { ProyectoComponent } from "./components/proyecto/proyecto.component";
import { interceptorProvider } from "./service/interceptor-service";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,    
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,    
    EditAcercaDeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    NgCircleProgressModule.forRoot({}),   
    HttpClientModule, 
    provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
