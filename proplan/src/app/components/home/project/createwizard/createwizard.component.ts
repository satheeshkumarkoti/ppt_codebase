import { Component, OnInit, Output } from '@angular/core';
import { ProplanService } from 'src/app/services/home/proplan.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-createwizard',
  templateUrl: './createwizard.component.html',
  styleUrls: ['./createwizard.component.scss']
})
export class CreatewizardComponent implements OnInit {

  public projectInfo: any;
  public startupInfo: any;
  public reqFreezeInfo: any;
  // public mlcValue: any;

  // public projectForm = this.fb.group({
  //   projectId: ['', Validators.required],
  //   customer: [''],
  //   projectName: [''],
  //   system: [''],
  //   mksProjectId: [''],
  //   swpm: ['', Validators.required],
  //   startupChecklist: ['']
  // });

  constructor(private fb: FormBuilder, private projectService: ProplanService) { }
  public addedFormData: any;
  ngOnInit() {
  }
  public setProjectInfo(projectInfo: any){
    this.projectInfo = projectInfo;
    // this.mlcValue = projectInfo.mlc;
    this.projectService.createProject(this.projectInfo).subscribe(
      (addedProject) => {
        this.addedFormData = addedProject;
        // this.dialogRef.close();
        console.log(this.addedFormData);
      });
    console.log(projectInfo);
  }

  public setStartupData(startupInfo: any){
    this.startupInfo = startupInfo;
    // console.log(startupInfo);
    if(this.projectInfo){
      this.projectInfo.startupChecklist = this.startupInfo;
      console.log(this.projectInfo);
      
    }
  }

  public setReqFreezePhaseData(reqFreezePhaseDataInfo: any){
    this.reqFreezeInfo = reqFreezePhaseDataInfo;
    console.log(reqFreezePhaseDataInfo);
    if(this.projectInfo){
      this.projectInfo.reqFreezeList = this.reqFreezeInfo;
      console.log(" setReqFreezePhaseData: "+ this.projectInfo);
       this.projectService.createProject(this.projectInfo).subscribe(
      (addedProject) => {
        this.addedFormData = addedProject;
        console.log(this.addedFormData);
      });
    }
  }
}
