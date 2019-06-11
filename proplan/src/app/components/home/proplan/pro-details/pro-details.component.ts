import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProplanService } from 'src/app/services/home/proplan.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ProAddComponent } from '../pro-add/pro-add.component';

@Component({
  selector: 'app-pro-details',
  templateUrl: './pro-details.component.html',
  styleUrls: ['./pro-details.component.scss']
})
export class ProDetailsComponent implements OnInit {

  // public projectForm = this.fb.group({
  //   // projectId: ['', Validators.required],
  //   projectName: [''],
  //   customer: [''],
  //   system: [''],
  //   mksProjectId: [''],
  //   swpm: ['', Validators.required],
  //   projectKickoffDate: [''],
  //   softwareKickoffDate: ['']
  // });

  public displayedColumns: string[] = [
    'projectName',
    'releaseType'
  ];

  public checkListData: any;

  constructor(private fb: FormBuilder, private projectService: ProplanService,
    public dialogRef: MatDialogRef<ProAddComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar) { }

  ngOnInit() {
    // this.projectService.getProject(this.data.projectName).subscribe(
    //     (project) => {
    //       this.formData = project;
    //     console.log(this.formData);
    //     });
  this.projectService.getProject(this.data._id).subscribe(
    (project) => {
      this.checkListData = project;
    console.log(this.checkListData);
    });

  }

  public onSubmit() {
    // this.projectService.createProject(this.projectForm.value).subscribe(
    //   (addedProject) => {
    //     this.formData = addedProject;
    //     this.dialogRef.close();
    //   });
  }

  // public editProject() {
  //   const project = this.projectForm.value;
  //   this.projectService.editProject(project, this.data._id).subscribe(
  //     projectRow => {
  //       this.snackBar.open('Record edited successfully!', null, {
  //         duration: 3000,
  //         verticalPosition: 'top'
  //       });
  //       this.dialogRef.close();
  //     });

  // }
  public get mlc(): any {
    return this.checkListData && this.checkListData.length > 0 ? this.checkListData[0].releaseType : '-';
  }

  // Project Startup Phase (calculated based on project kick-off date)
  public get startupChecklist(): any{
    return this.checkListData && this.checkListData.length > 0 ? this.checkListData[0].startupChecklist : null;
  }
// Requirement Freeze Phase
  public get reqFreezeChecklist(): any{
    return this.checkListData && this.checkListData.length > 0 ? this.checkListData[0].reqFreezeChecklist : null;
  }
// MLC50 Software Implementation
  public get swImplementationChecklist(): any{
    return this.checkListData && this.checkListData.length > 0 ? this.checkListData[0].swImplementationChecklist : null;
  }
// Before {{mlc}} Software Pre-Freeze
public get beforeSoftwarePreFreezeChecklist(): any{
  return this.checkListData && this.checkListData.length > 0 ? this.checkListData[0].beforeSWPreFreezeChecklist : null;
}

// Before MLC50 SW freeze
public get beforeSWFreezeChecklist(): any{
  return this.checkListData && this.checkListData.length > 0 ? this.checkListData[0].beforeSWFreezeChecklist : null;
}

// Before MLC50 SW Release
public get beforeSWReleaseChecklist(): any{
  return this.checkListData && this.checkListData.length > 0 ? this.checkListData[0].beforeSWReleaseChecklist : null;
}

// After MLC50 SW Release
public get afterSWReleaseChecklist(): any{
  return this.checkListData && this.checkListData.length > 0 ? this.checkListData[0].afterSWReleaseChecklist : null;
}

public deleteProject(row) {
  console.log(this.checkListData._id);
}

}
