import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StudentFormComponent} from "./student-form/student-form.component";
import {StudentDataComponent} from "./student-data/student-data.component";
import {MenuComponent} from "./menu/menu.component";
import {StudentReportComponent} from "./student-report/student-report.component";
import {PageNotFoundComponent} from "./page-not-found.component";
import {AuthGuard} from "./guards/auth-guard.service";
import {EventemitterComponent} from "./eventemitter/eventemitter.component";
import {AnimalListComponent} from "./animal-list/animal-list.component";
import {LoginComponent} from "./login/login.component";
import {EnrollmentsComponent} from "./enrollments/enrollments.component";

const routes: Routes = [
  {
    path: '', component: MenuComponent, children: [
    // {path: '', component: AnimalListComponent, children: [
    {path: '', component: StudentFormComponent},
    {
      path: 'form', component: StudentFormComponent, children: []
    },
    {path: 'formData', component: StudentDataComponent},
    {path: 'report', component: StudentReportComponent, canActivate: [AuthGuard]},
    {path: 'emit', component: EventemitterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'pagenotfound', component: PageNotFoundComponent},
    {path: 'enrollments', component: EnrollmentsComponent, children: [
      {path: ':id/:name', component: EnrollmentsComponent}
    ]
    },
  ]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
