import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatToolbarModule, MatCardModule, MatDividerModule, MatSidenavModule, MatIconModule, MatListModule,
   MatDialogModule,
   MatFormFieldModule,
   MatInputModule,
   MatSnackBarModule,
   MatStepperModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatSlideToggleModule,
   MatRadioModule,
   MatExpansionPanel,
   MatExpansionModule,
   MatAccordion,
   MatSelectModule,
   MatAutocompleteModule,
   MatChipsModule
   } from '@angular/material';
import { ProjectComponent } from './components/home/project/project.component';
import { ProplanComponent } from './components/home/proplan/proplan.component';
import { AdminComponent } from './components/admin/admin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NavigationComponent } from './components/home/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProAddComponent } from './components/home/proplan/pro-add/pro-add.component';
import { ProDetailsComponent } from './components/home/proplan/pro-details/pro-details.component';
import { CreatewizardComponent } from './components/home/project/createwizard/createwizard.component';
import { ProjectinfoComponent } from './components/home/project/createwizard/projectinfo/projectinfo.component';
import { StartupComponent } from './components/home/project/createwizard/startup/startup.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReqfreezephaseComponent } from './components/home/project/createwizard/reqfreezephase/reqfreezephase.component';
import { ChecklistTableComponent } from './components/home/proplan/checklist-table/checklist-table.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { ProjectRowComponent } from './components/home/dashboard/project-row/project-row.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProplanComponent,
    AdminComponent,
    NavigationComponent,
    ProAddComponent,
    ProDetailsComponent,
    CreatewizardComponent,
    ProjectinfoComponent,
    StartupComponent,
    ReqfreezephaseComponent,
    ChecklistTableComponent,
    DashboardComponent,
    ProjectRowComponent
  ],
  imports: [
    AppRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatStepperModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatExpansionModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ // whatever we show in dialog
    ProAddComponent,
    ProDetailsComponent,
    CreatewizardComponent
  ]
})
export class AppModule { }
