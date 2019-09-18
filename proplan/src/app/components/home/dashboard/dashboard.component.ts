import { Component, OnInit, ViewChild } from '@angular/core';
import { ProplanService } from 'src/app/services/home/proplan.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // @ViewChild(MatPaginator) public paginator: MatPaginator;
  // @ViewChild(MatSort) public sort: MatSort;

  public projectList: any;
  // displayedColumns: string[] = ['pName', 'sName', 'relNo', 'sChecklist', 'rfP', 'siP', 'bspf', 'bsf', 'bsr', 'asr'];

  displayedColumns: string[] = ['pName', 'sName', 'relNo', 'bsf'];


  constructor(private proPlanService: ProplanService) { }

  ngOnInit() {
    this.proPlanService.getAllProjects().subscribe(
      data => {
        this.projectList = data;
        // this.projectList.paginator = this.paginator;
        // this.projectList.sort = this.sort;
    });
  }

}
