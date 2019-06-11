import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { ProplanService } from 'src/app/services/home/proplan.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-projectinfo',
  templateUrl: './projectinfo.component.html',
  styleUrls: ['./projectinfo.component.scss']
})
export class ProjectinfoComponent implements OnInit {

  public projectForm = this.fb.group({
    // projectId: ['', Validators.required],
    projectName: [''],
    // customer: [''],    
    // system: [''],
    // mksProjectId: [''],
    // swpm: ['', Validators.required],
    projectKickoffDate: [''],
    softwareKickoffDate: ['']
    // mlc: ['']
  });

  public addedFormData: any;
  @Output()
  public projectFormDataSaved = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProjectinfoComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public onSubmit() {
    // this.projectService.createProject(this.projectForm.value).subscribe(
    //   (addedProject) => {
    //     this.addedFormData = addedProject;
    //     this.dialogRef.close();
    //   });
    this.projectFormDataSaved.emit(this.projectForm.value);
  }

}
