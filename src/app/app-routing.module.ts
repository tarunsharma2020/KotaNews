import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './master/home/home.component';
import { ContactUsComponent } from './master/contact-us/contact-us.component';
import { DashboardComponent } from './master/dashboard/dashboard.component';
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'Dashboard', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
