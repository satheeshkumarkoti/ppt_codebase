import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createwizard',
  templateUrl: './createwizard.component.html',
  styleUrls: ['./createwizard.component.scss']
})
export class CreatewizardComponent implements OnInit {

  public projectInfo: any;
  public startupInfo: any;

  constructor() { }

  ngOnInit() {
  }
  public setProjectInfo(projectInfo: any){
    this.projectInfo = projectInfo;
    console.log(projectInfo);
  }

  public setStartupData(startupInfo: any){
    this.startupInfo = startupInfo;
    console.log(startupInfo);
  }

}
