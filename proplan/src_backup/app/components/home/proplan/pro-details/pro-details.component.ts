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

  public projectForm = this.fb.group({
    projectId: ['', Validators.required],
    projectName: [''],
    customer: [''],   
    system: [''],    
    mksProjectId: [''],
    swpm: ['', Validators.required]
  });

  public formData: any;

  constructor(private fb: FormBuilder, private projectService: ProplanService,
    public dialogRef: MatDialogRef<ProAddComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.formData = this.data;
    this.projectForm.setValue({
        projectId: this.formData.projectId,
        projectName: this.formData.projectName,
        customer: this.formData.customer,     
        system: this.formData.system,     
        mksProjectId: this.formData.mksProjectId,
        swpm: this.formData.swpm
      });
  }

  public onSubmit() {
    // this.projectService.createProject(this.projectForm.value).subscribe(
    //   (addedProject) => {
    //     this.formData = addedProject;
    //     this.dialogRef.close();
    //   });
  }

  public editProject() {
    const project = this.projectForm.value;
    this.projectService.editProject(project, this.data._id).subscribe(
      projectRow => {
        this.snackBar.open('Record edited successfully!', null, {
          duration: 3000,
          verticalPosition: 'top'
        });
        this.dialogRef.close();      
      });   

  }

  public deleteProject(row) {
    console.log(this.formData._id);
  }

}
