import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-reqfreezephase',
  templateUrl: './reqfreezephase.component.html',
  styleUrls: ['./reqfreezephase.component.scss']
})
export class ReqfreezephaseComponent implements OnInit {
  @Output()
  public reqFreezePhaseDataSaved = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  public reqFreezePhaseForm = new FormGroup({
    swImplStartsWithTrunk:  new FormControl(''),
  });

  public onSubmit() {
       this.reqFreezePhaseDataSaved.emit(this.reqFreezePhaseForm.value);
  }

}
