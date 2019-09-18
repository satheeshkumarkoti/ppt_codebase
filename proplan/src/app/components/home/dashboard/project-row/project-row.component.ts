import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { ChipColor } from '../../ChipColor';
@Component({
  selector: 'app-project-row',
  templateUrl: './project-row.component.html',
  styleUrls: ['./project-row.component.scss']
})
export class ProjectRowComponent implements OnChanges {

  @Input()
  public project: any;

  public availableColors: ChipColor[];
  // [
  //   // {name: 'Startup', color: this.project.startupChecklistObject.startUpPhaseStatus},
  //   // {name: 'Requirement Freeze', color: this.project.requirementFreezePhaseObject.requirementFreezePhaseStatus}
  //   {name: 'Software Implementation', color: 'accent'},
  //   {name: 'Before Software PreFreeze', color: 'warn'},

  //   {name: 'Before Software Freeze', color: 'primary'},
  //   {name: 'Before Software Release', color: 'accent'},
  //   {name: 'After Software Release', color: 'warn'}
  // ];

  constructor() { }
  ngOnChanges(): void {
    this.availableColors = [
      {name: 'Startup', color: this.project.startupChecklistObject.startUpPhaseStatus ? 'red' : 'green'},
      {name: 'Requirement Freeze', color: this.project.requirementFreezePhaseObject.requirementFreezePhaseStatus ? 'green' : 'red'},
      {name: 'SW Implementation', color: this.project.startupChecklistObject.startUpPhaseStatus ? 'red' : 'green' },
      {name: 'Before SW PreFreeze', color: this.project.requirementFreezePhaseObject.requirementFreezePhaseStatus ? 'green' : 'red'},
      {name: 'Before SW Freeze', color: this.project.requirementFreezePhaseObject.requirementFreezePhaseStatus ? 'warn' : 'warn'},
      {name: 'Before SW Release', color: this.project.startupChecklistObject.startUpPhaseStatus ? 'warn' : 'warn'},
      {name: 'After SW Release', color: this.project.requirementFreezePhaseObject.requirementFreezePhaseStatus ? 'warn' : 'warn'}
    ];
  }

  //    this.availableChecklist.push({name: 'Startup', color: this.project.startupChecklistObject.startUpPhaseStatus});
  //    this.availableChecklist.push({name: 'Requirement Freeze', color: this.project.requirementFreezePhaseObject.requirementFreezePhaseStatus});
  //    this.availableChecklist.push({name: 'Software Implementation', color: this.project.softwareImplementationObject.softwareImplementationPhaseStatus});
  //    this.availableChecklist.push({name: 'Before Software PreFreeze', color: this.project.beforeSoftwarePreFreezeObject. beforeSoftwarePreFreezeStatus});

  //   return this.availableChecklist;
  // }



}
