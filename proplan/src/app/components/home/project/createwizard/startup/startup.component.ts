import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {

  @Output()
  public startupDataSaved = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  public startupForm = new FormGroup({
    masterPlanDueDate:  new FormControl(''),
    masterPlanCompleted: new FormControl(),    
    softwareFunctionListDueDate: new FormControl(''),
    softwareFunctionListAvailable: new FormControl(),
    softwareDefinitionDueDate: new FormControl(''),
    systemDefinitionAvailable:  new FormControl(),
    vdsDueDate: new FormControl(''),
    vdsAvailable: new FormControl()
    // teamMembersAvailable: new FormControl(true),
    // teamMembersDueDate: new FormControl(''),
    // dgDQNumbersAvailable: new FormControl(true),
    // dgDQNumbersDueDate: new FormControl(''),
    // schedulePreparationAvailable:new FormControl(true),
    // schedulePreparationDueDate: new FormControl(''),
    // newProjectIdAvailable: new FormControl(true),
    // newProjectIdDueDate: new FormControl(''),
    // resourceEstimationAvailable: new FormControl(true),
    // resourceEstimationDueDate: new FormControl(''),
    // mks1ProjectIdAvailable: new FormControl(true),
    // mks1ProjectIdDueDate: new FormControl(''),
    // mks3ProjectFolderAvailable: new FormControl(true),
    // mks3ProjectFolderDueDate: new FormControl(''),
    // mks3ProjectSheetAvailable: new FormControl(true),
    // mks3ProjectSheetDueDate: new FormControl(''),
    // newParameterSetAvailable: new FormControl(true),
    // newParameterSetDueDate: new FormControl(''),
    // newConfigurationSetAvailable: new FormControl(true),
    // newConfigurationSetDueDate: new FormControl(''),
    // newEepromLayoutAvailable: new FormControl(true),
    // newEepromLayoutDueDate: new FormControl(''),
    // softwareStatusAvailable: new FormControl(true),
    // softwareStatusDueDate: new FormControl(''),
    // softwareMeetingMinutesAvailable: new FormControl(true),
    // softwareMeetingMinutesDueDate: new FormControl(''),
    // softwareRiskListAvailable: new FormControl(true),
    // softwareRiskListDueDate: new FormControl(''),
    // scheduleSoftwareKickoffAvailable: new FormControl(true),
    // scheduleSoftwareKickoffDueDate: new FormControl(''),
    // reviewConfigurationParameterSetsAvailable: new FormControl(true),
    // reviewConfigurationParameterSetsDueDate: new FormControl(''),
    // ecuHCUOrderAvailable: new FormControl(true),
    // ecuHCUOrderDueDate: new FormControl(''),
    // wiringHarnessAvailable: new FormControl(true),
    // wiringHarnessDueDate: new FormControl(''),
    // identifyTheCFLAvailable: new FormControl(true),
    // identifyTheCFLDueDate: new FormControl('')



  });

  public onSubmit() {
       this.startupDataSaved.emit(this.startupForm.value);
  }
}
