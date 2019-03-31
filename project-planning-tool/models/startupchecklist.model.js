const mongoose = require('mongoose')
const Project = require('./project.model');
const Schema = mongoose.Schema;

const StartupChecklistSchema = mongoose.Schema(
  {
    masterPlanDueDate: {
      type: Date     
    },
    masterPlanCompleted: {
      type: Boolean
    },
    softwareFunctionListAvailable: {
      type: Boolean
    },
    softwareFunctionListDueDate: {
      type: String
    },
    systemDefinitionAvailable: {
      type: Boolean
    },
    softwareDefinitionDueDate: {
      type: String
    },
    vdsAvailable: {
      type: Boolean
    },
    vdsDueDate: {
      type: String
    },
    teamMembersAvailable: {
      type: Boolean
    },
    teamMembersDueDate: {
      type: String
    },
    dgDQNumbersAvailable: {
      type: Boolean
    },
    dgDQNumbersDueDate: {
      type: String
    },
    schedulePreparationAvailable: {
      type: Boolean
    },
    schedulePreparationDueDate: {
      type: String
    },
    newProjectIdAvailable: {
      type: Boolean
    },
    newProjectIdDueDate: {
      type: String
    },
    resourceEstimationAvailable: {
      type: Boolean
    },
    resourceEstimationDueDate: {
      type: String
    },
    mks1ProjectIdAvailable: {
      type: Boolean
    },
    mks1ProjectIdDueDate: {
      type: String
    },
    mks3ProjectFolderAvailable: {
      type: Boolean
    },
    mks3ProjectFolderDueDate: {
      type: String
    },
    mks3ProjectSheetAvailable: {
      type: Boolean
    },
    mks3ProjectSheetDueDate: {
      type: String
    },
    newParameterSetAvailable: {
      type: Boolean
    },
    newParameterSetDueDate: {
      type: String
    },
    newConfigurationSetAvailable: {
      type: Boolean
    },
    newConfigurationSetDueDate: {
      type: String
    },
    // newEepromLayoutAvailable: {
    //   type: Boolean
    // },
    // newEepromLayoutDueDate: {
    //   type: String
    // },
    newEepromLayoutAvailable: {
      type: Boolean
    },
    newEepromLayoutDueDate: {
      type: String
    },
    softwareStatusAvailable: {
      type: Boolean
    },
    softwareStatusDueDate: {
      type: String
    },
    softwareMeetingMinutesAvailable: {
      type: Boolean
    },
    softwareMeetingMinutesDueDate: {
      type: String
    },
    softwareRiskListAvailable: {
      type: Boolean
    },
    softwareRiskListDueDate: {
      type: String
    },
    scheduleSoftwareKickoffAvailable: {
      type: Boolean
    },
    scheduleSoftwareKickoffDueDate: {
      type: String
    },
    reviewConfigurationParameterSetsAvailable: {
      type: Boolean
    },
    reviewConfigurationParameterSetsDueDate: {
      type: String
    },
    ecuHCUOrderAvailable: {
      type: Boolean
    },
    ecuHCUOrderDueDate: {
      type: String
    },
    wiringHarnessAvailable: {
      type: Boolean
    },
    wiringHarnessDueDate: {
      type: String
    },
    identifyTheCFLAvailable: {
      type: Boolean
    },
    identifyTheCFLDueDate: {
      type: String
    },  
    project: { 
      type: Schema.Types.ObjectId, 
      ref: 'Project' 
    },
    active: {
      type: String,
      default: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('StartupChecklist', StartupChecklistSchema)
