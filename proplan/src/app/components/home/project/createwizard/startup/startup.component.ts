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
    masterPlanCompleted: new FormControl(true),
    softwareFunctionListAvailable: new FormControl(true),
    softwareFunctionListDueDate: new FormControl('')
    // systemDefinitionAvailable:  new FormControl(true),
    // softwareDefinitionDueDate: new FormControl(''),
    // vdsAvailable: new FormControl(true),
    // vdsDueDate: new FormControl(''),
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

/*
masterPlanDueDate: new Date(),
masterPlanCompleted: true,
softwareFunctionListAvailable: true,
softwareFunctionListDueDate: new Date(),
systemDefinitionAvailable: true,
softwareDefinitionDueDate: new Date(),
vdsAvailable: true,
vdsDueDate: new Date(),
teamMembersAvailable: true,
teamMembersDueDate: new Date(),
dgDQNumbersAvailable: true,
dgDQNumbersDueDate: new Date(),
schedulePreparationAvailable: true,
schedulePreparationDueDate: new Date(),
newProjectIdAvailable: true,
newProjectIdDueDate: new Date(),
resourceEstimationAvailable: true,
resourceEstimationDueDate: new Date(),
mks1ProjectIdAvailable: true,
mks1ProjectIdDueDate: new Date(),
mks3ProjectFolderAvailable: true,
mks3ProjectFolderDueDate: new Date(),
mks3ProjectSheetAvailable: true,
mks3ProjectSheetDueDate: new Date(),
newParameterSetAvailable: true,
newParameterSetDueDate: new Date(),
newConfigurationSetAvailable: true,
newConfigurationSetDueDate: new Date(),
newEepromLayoutAvailable: true,
newEepromLayoutDueDate: new Date(),
softwareStatusAvailable: true,
softwareStatusDueDate: new Date(),
softwareMeetingMinutesAvailable: true,
softwareMeetingMinutesDueDate: new Date(),
softwareRiskListAvailable: true,
softwareRiskListDueDate: new Date(),
scheduleSoftwareKickoffAvailable: true,
scheduleSoftwareKickoffDueDate: new Date(),
reviewConfigurationParameterSetsAvailable: true,
reviewConfigurationParameterSetsDueDate: new Date(),
ecuHCUOrderAvailable: true,
ecuHCUOrderDueDate: new Date(),
wiringHarnessAvailable: true,
wiringHarnessDueDate: new Date(),
identifyTheCFLAvailable: true,
identifyTheCFLDueDate: new Date()

*/

  });

  public onSubmit() {
       this.startupDataSaved.emit(this.startupForm.value);
  }
}
