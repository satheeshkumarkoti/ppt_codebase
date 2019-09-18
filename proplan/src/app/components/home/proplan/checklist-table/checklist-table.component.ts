import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-checklist-table',
  templateUrl: './checklist-table.component.html',
  styleUrls: ['./checklist-table.component.scss']
})
export class ChecklistTableComponent implements OnInit {

  @Input()
  public checklistData: any;

  constructor() { }

  ngOnInit() {
  }
  // masterplanDueDate: {
  //   value: duedatevalue should come her
  //   Can be automated: true/false
  //   Status: (Open/Close/Not applicable)
  //    MKS/OPP Location ?
  // Links/ Comments
  //   }
}
