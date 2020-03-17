import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { StudentDataService } from "./student-form/student-data.service"
import { RouteAuthService } from "./services/route.auth.service";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialog, MatDialogModule, MatInputModule, MatSelectModule, MatTooltipModule} from "@angular/material";
import { StudentDataEditComponent } from './student-data-edit/student-data-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MenuComponent } from './menu/menu.component';
import { StudentReportComponent } from './student-report/student-report.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard} from "./guards/auth-guard.service";
import {AgmCoreModule} from "@agm/core";
import {AgmSnazzyInfoWindowModule} from "@agm/snazzy-info-window";
import {HttpClientModule} from "@angular/common/http";
import { EventemitterComponent } from './eventemitter/eventemitter.component';
import { EmitChildComponent } from './eventemitter/emit-child/emit-child.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalModelComponent } from './animal-list/animal-model.component';
import {GetAnimalDataService} from "./animal-list/get-animal-data.service";
import { LoginComponent } from './login/login.component';
import {LoginService} from "./login/login.service";
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import {GlobalService} from "./shared/global.service";
import {EnrollmentService} from "./enrollments/enrollment.service";
import {BackgroundColorDirective} from "./shared/background-color.directive";
import { InputFieldComponent } from './controls/input-field/input-field.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentDataComponent,
    StudentDataEditComponent,
    MenuComponent,
    StudentReportComponent,
    PageNotFoundComponent,
    EventemitterComponent,
    EmitChildComponent,
    AnimalListComponent,
    AnimalModelComponent,
    LoginComponent,
    EnrollmentsComponent,
    BackgroundColorDirective,
    InputFieldComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    HttpClientModule,
    MatSelectModule,
    MatTooltipModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSIFuXPQXel1splGkx5ElXoU1bL60Jn-I'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [GlobalService,
    StudentDataService,
    RouteAuthService,
    AuthGuard,
    GetAnimalDataService,
    MatDialog,
    LoginService,
    EnrollmentService

  ],
  bootstrap: [AppComponent],
  exports: [BackgroundColorDirective],
  entryComponents: [
    StudentDataEditComponent, AnimalModelComponent]

})
export class AppModule { }
