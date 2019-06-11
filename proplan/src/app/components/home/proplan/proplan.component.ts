import { Component, OnInit } from '@angular/core';
import { ProplanService } from 'src/app/services/home/proplan.service';
import { IProject } from 'src/app/components/home/IProject';
import { MatPaginator, MatTableDataSource, MatSort, MatDatepickerInputEvent } from '@angular/material';
import {Sort} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ProAddComponent } from './pro-add/pro-add.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { CreatewizardComponent } from '../project/createwizard/createwizard.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-proplan',
  templateUrl: './proplan.component.html',
  styleUrls: ['./proplan.component.scss']
})
export class ProplanComponent implements OnInit {

  public projects: String[];
  public mlcs: any[];
  public isMlcsVisible: boolean;
  public myControl = new FormControl();
  public selectedMlc;
  public myMlc = new FormControl();
  public isDatesVisible: boolean;
  public filteredProject: any;
  public projectKickOfDate: String;
  public softwareKickofDate: String;
  public skDate = new FormControl();
  public pkDate = new FormControl();

  public startUpChecklist: any;
  public reqFreezeChecklist: any;
  public swImplementationChecklist: any;
  public beforeSWPreFreezeChecklist: any;
  public beforeSWFreezeChecklist: any;
  public beforeSWReleaseChecklist: any;
  public afterSWReleaseChecklist: any;


  public isChecklistsVisible: boolean;
  // sortedData: IProject[];

  // public displayedColumns: string[] = [
  //   'projectName',
  //   'releaseType'
  // ];
  constructor(private proPlanService: ProplanService,
    public dialog: MatDialog) {
      console.log(moment());
   }

  ngOnInit() {
   this.loadProjectData();
  }

  public loadProjectData() {
    this.proPlanService.getAllProjects().subscribe(
      response => {
        this.projects = response;
        // this.projectsList = new MatTableDataSource<IProject>(response);
        // this.projectsList = response;
        // this.sortedData = this.projectsList.slice();
      });
  }

  public getMlcs(selectedProjectId: String){
    this.proPlanService.getMlcs(selectedProjectId).subscribe(mlcs => {
      this.mlcs = mlcs;
      this.isMlcsVisible = this.mlcs && this.mlcs.length > 0;
    });
  }

  public getMLCData(data) {
    this.proPlanService.getProject(data).subscribe(project => {
      this.isDatesVisible = !!(project);
      this.filteredProject = project;
    });
  }

  public editProject(){
    this.filteredProject[0].freezeDate = this.projectKickOfDate;
    this.filteredProject[0].releaseDate = this.softwareKickofDate;
    this.filteredProject[0].startupChecklist.masterPlanDueDate = '2019-08-01';
    this.proPlanService.editProject(this.filteredProject[0], this.filteredProject[0]._id).subscribe(checkList =>{

      this.startUpChecklist = checkList.startupChecklist;
      this.reqFreezeChecklist = checkList.reqFreezeChecklist;
      this.swImplementationChecklist = checkList.swImplementationChecklist;
      this.beforeSWPreFreezeChecklist = checkList.beforeSWPreFreezeChecklist;
      this.beforeSWFreezeChecklist = checkList.beforeSWFreezeChecklist;
      this.beforeSWReleaseChecklist = checkList.beforeSWReleaseChecklist;
      this.afterSWReleaseChecklist = checkList.afterSWReleaseChecklist;

      // TODO have to give valide condition for below boolean value
      this.isChecklistsVisible = true;
      console.log(this.startUpChecklist.masterPlanDueDate);
    });

  }

  changePKDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.projectKickOfDate = event.value.toDateString();
  }

  changeSWKDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.softwareKickofDate = event.value.toDateString();
  }

  // public openDialog(): void {
  //   const dialogRef = this.dialog.open(CreatewizardComponent, {
  //     width: '1000px',
  //     height: '800px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.loadProjectData();
  //   });

  // }

  // public showProjectDetails(row) {
  //   const dialogRef = this.dialog.open(ProDetailsComponent, {
  //     width: '1000px',
  //     height: '800px',
  //     data: row
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.loadProjectData();
  //   });
  // }



}
