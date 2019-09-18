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
import { ICommonChecklist } from '../ICommonChecklist';

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
  public projectKickOffDate: Date;
  public softwareKickOffDate: Date;
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

  public displayedColumns: string[] = [
    'description',
    'dueDate',
    'status',
    'mksOppLocation',
    'linksComments'
  ];

  // sortedData: IProject[];

  // public displayedColumns: string[] = [
  //   'projectName',
  //   'releaseType'
  // ];
  constructor(private proPlanService: ProplanService,
    public dialog: MatDialog) {
      // console.log(moment().add(15, 'days').format('DD-MM-YYYY'));
   }

  ngOnInit() {
   this.loadProjectData();
  }

  public loadProjectData() {
    this.proPlanService.getAllProjects().subscribe(
      response => {
        this.projects = response;
        console.log(this.projects);
      });
  }

  public getMlcs(selectedProjectId: String) {
    this.proPlanService.getMlcs(selectedProjectId).subscribe(mlcs => {
      this.mlcs = mlcs;
      console.log('mlcs' + this.mlcs + 'selectedProjectId ' + selectedProjectId.toString);
      this.isMlcsVisible = this.mlcs && this.mlcs.length > 0;
    });
  }

  public getMLCData(data) {
    this.proPlanService.getProject(data).subscribe(project => {
      this.isDatesVisible = !!(project);
      this.filteredProject = project;
      if (this.filteredProject[0].userStatus) {
        this.isChecklistsVisible = true;
       }
    });

  }

  public editProject() {
    // have to create new variables in Mongo DB to store projectKickOfDate, softwareKickofDate

    this.filteredProject[0].freezeDate = this.projectKickOffDate;
    this.filteredProject[0].releaseDate = this.softwareKickOffDate;
    this.filteredProject[0].projectKickOffDate = this.projectKickOffDate;
    this.filteredProject[0].softwareKickOffDate = this.softwareKickOffDate;
// it shold be startupChecklistObject.checklist instead of startupChecklistObject.startUpChecklistObject
    this.filteredProject[0].startupChecklistObject.startUpChecklist[0].dueDate
    = moment(new Date(this.projectKickOffDate)).add(14, 'days').format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[1].dueDate
    = moment(this.projectKickOffDate).format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[2].dueDate
    = moment(this.projectKickOffDate).format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[3].dueDate
    = moment(this.projectKickOffDate).format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[4].dueDate
    = moment(this.projectKickOffDate).format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[5].dueDate
    = moment(this.projectKickOffDate).format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[6].dueDate
    = moment(this.projectKickOffDate).add(21, 'days').format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[7].dueDate
    = moment(this.projectKickOffDate).add(7, 'days').format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[8].dueDate
    = moment(this.projectKickOffDate).format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[9].dueDate
    = moment(this.projectKickOffDate).add(21, 'days').format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[10].dueDate
    = moment(this.projectKickOffDate).add(21, 'days').format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[11].dueDate
     = moment(this.projectKickOffDate).add(21, 'days').format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[12].dueDate
     = moment(this.projectKickOffDate).add(21, 'days').format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[13].dueDate
     = moment(this.projectKickOffDate).add(21, 'days').format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[14].dueDate
     = moment(this.projectKickOffDate).add(21, 'days').format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[15].dueDate
    = moment(this.projectKickOffDate).add(21, 'days').format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[16].dueDate
     = moment(this.softwareKickOffDate).add(42, 'days').format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[17].dueDate
     = moment(this.softwareKickOffDate).add(14, 'days').format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[18].dueDate
     = moment(this.softwareKickOffDate).add(14, 'days').format('DD-MM-YYYY');
    this.filteredProject[0].startupChecklistObject.startUpChecklist[19].dueDate
     = moment(this.softwareKickOffDate).add(21, 'days').format('DD-MM-YYYY');
    const startUpChecklistEndDate = moment(this.softwareKickOffDate).add(42, 'days');

    const startUpChecklistColor =  startUpChecklistEndDate.diff(moment(), 'days') >= 0 ? '#00ff00' : '#ff0000' ;
    this.filteredProject[0].startupChecklistObject.startUpPhaseStatus = startUpChecklistColor;

    this.proPlanService.editProject(this.filteredProject[0], this.filteredProject[0]._id).subscribe(checkList => {
      console.log(checkList.startupChecklistObject);
//  this.swEReleaseWPList = new MatTableDataSource<ISWEReleaseWP>(swEReleaseWPs);
      this.startUpChecklist = new MatTableDataSource<ICommonChecklist>(checkList.startupChecklistObject.startUpChecklist);
      // requirementFreezePhaseObject
      this.filteredProject[0].requirementFreezePhaseObject.requirementFreezePhase[0].dueDate
      = moment(this.projectKickOffDate).add(60, 'days').format('DD-MM-YYYY');
      this.filteredProject[0].requirementFreezePhaseObject.requirementFreezePhase[1].dueDate
      = moment(this.softwareKickOffDate).add(56, 'days').format('DD-MM-YYYY');
      this.filteredProject[0].requirementFreezePhaseObject.requirementFreezePhase[2].dueDate
      = moment(this.projectKickOffDate).format('DD-MM-YYYY');
      this.filteredProject[0].requirementFreezePhaseObject.requirementFreezePhase[3].dueDate
      = moment(this.softwareKickOffDate).add(56, 'days').format('DD-MM-YYYY');
      this.filteredProject[0].requirementFreezePhaseObject.requirementFreezePhase[4].dueDate
      = moment(this.softwareKickOffDate).add(42, 'days').format('DD-MM-YYYY');
      const requirementFreezePhaseColor =  startUpChecklistEndDate.diff(moment(), 'days') >= 0 ? '#00ff00' : '#ff0000' ;
      this.filteredProject[0].requirementFreezePhaseObject.requirementFreezePhaseStatus = requirementFreezePhaseColor;
      this.reqFreezeChecklist = new MatTableDataSource<ICommonChecklist>(checkList.requirementFreezePhaseObject.requirementFreezePhase);
      console.log(checkList.requirementFreezePhaseObject);


      this.swImplementationChecklist = new MatTableDataSource<ICommonChecklist>
      (checkList.softwareImplementationObject.softwareImplementationPhase);
      this.beforeSWPreFreezeChecklist = new MatTableDataSource<ICommonChecklist>
      (checkList.beforeSoftwarePreFreezeObject.beforeSoftwarePreFreeze);
      this.beforeSWFreezeChecklist = new MatTableDataSource<ICommonChecklist>
      (checkList.beforeSoftwareFreezeObject.beforeSoftwareFreezeObject);
      this.beforeSWReleaseChecklist = new MatTableDataSource<ICommonChecklist>(checkList.beforeSWReleaseObjectObject.beforeSWReleaseObject);
      this.afterSWReleaseChecklist = new MatTableDataSource<ICommonChecklist>(checkList.afterSWReleaseChecklistObject.afterSWReleaseObject);

      // TODO have to give valide condition for below boolean value
      this.isChecklistsVisible = true;
      // console.log(this.filteredProject[0]);
    });
  }

  // private method
  changePKDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.projectKickOffDate = event.value;
  }

  changeSWKDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.softwareKickOffDate = event.value;
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
