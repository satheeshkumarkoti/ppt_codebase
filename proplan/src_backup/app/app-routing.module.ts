import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProplanComponent } from './components/home/proplan/proplan.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path: 'proplan', component: ProplanComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', redirectTo: '/proplan', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
