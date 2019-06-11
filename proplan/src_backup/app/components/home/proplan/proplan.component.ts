import { Component, OnInit } from '@angular/core';
import { ProplanService } from 'src/app/services/home/proplan.service';
import { IProject } from 'src/app/components/home/IProject';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import {Sort} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ProAddComponent } from './pro-add/pro-add.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { CreatewizardComponent } from '../project/createwizard/createwizard.component';

@Component({
  selector: 'app-proplan',
  templateUrl: './proplan.component.html',
  styleUrls: ['./proplan.component.scss']
})
export class ProplanComponent implements OnInit {

  public project: IProject[];
  public projectsList: any;
  sortedData: IProject[];

  public displayedColumns: string[] = [
    'projectId',
    'projectName',
    'customer', 
    'system', 
    'mksProjectId', 
    'swpm'
  ];
  constructor(private proPlanService: ProplanService,
    public dialog: MatDialog) {
   }

  ngOnInit() {
   this.loadProjectData();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreatewizardComponent, {
      width: '1000px',
      height: '800px'      
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadProjectData();
    });

  }

  public showProjectDetails(row) {
    // console.log(row);
    const dialogRef = this.dialog.open(ProDetailsComponent, {
      width: '1000px',
      height: '800px',
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadProjectData();  
    });
  }

public loadProjectData() {
  this.proPlanService.getAllProjects().subscribe(
    response => {
      this.project = response;
      this.projectsList = new MatTableDataSource<IProject>(response);
      this.projectsList = response;
      this.sortedData = this.projectsList.slice();
    });
}

}
