import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProplanService } from 'src/app/services/home/proplan.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pro-add',
  templateUrl: './pro-add.component.html',
  styleUrls: ['./pro-add.component.scss']
})
export class ProAddComponent implements OnInit {
  public projectForm = this.fb.group({
    // projectId: ['', Validators.required],
    customer: [''],
    projectName: [''],
    system: [''],
    mksProjectId: [''],
    swpm: ['', Validators.required]
  });

  public addedFormData: any;

  constructor(private fb: FormBuilder, private projectService: ProplanService,
    public dialogRef: MatDialogRef<ProAddComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.projectService.createProject(this.projectForm.value).subscribe(
      (addedProject) => {
        this.addedFormData = addedProject;
        this.dialogRef.close();
      });
  }

}
