import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProplanComponent } from './components/home/proplan/proplan.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';

const routes: Routes = [
  {   path: 'proplan',
      component: ProplanComponent
  },
  {
      path: 'admin',
      component: AdminComponent
    },
  {
      path: 'dashboard',
      component: DashboardComponent
    },
  // {path: 'project-info', component: ProjectinfoComponent },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
