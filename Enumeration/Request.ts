// @formatter:off
enum Request {
  LaunchRequest = 'LaunchRequest',
  IntentRequest = 'IntentRequest',
  SessionEndedRequest = 'SessionEndedRequest',

  SystemExceptionEncountered = 'System.ExceptionEncountered',

  AudioPlayerPlaybackStarted = 'AudioPlayer.PlaybackStarted',
  AudioPlayerPlaybackFinished = 'AudioPlayer.PlaybackFinished',
  AudioPlayerPlaybackStopped = 'AudioPlayer.PlaybackStopped',
  AudioPlayerPlaybackNearlyFinished = 'AudioPlayer.PlaybackNearlyFinished',

  PlaybackControllerNextCommandIssued = 'PlaybackController.NextCommandIssued',
  PlaybackControllerPauseCommandIssued = 'PlaybackController.PauseCommandIssued',
  PlaybackControllerPlayCommandIssued = 'PlaybackController.PlayCommandIssued',
  PlaybackControllerPreviousCommandIssued = 'PlaybackController.PreviousCommandIssued',

  AlexaSkillEventSkillAccountLinked = 'AlexaSkillEvent.SkillAccountLinked',
  AlexaSkillEventSkillEnabled = 'AlexaSkillEvent.SkillEnabled',
  AlexaSkillEventSkillDisabled = 'AlexaSkillEvent.SkillDisabled',
  AlexaSkillEventSkillPermissionAccepted = 'AlexaSkillEvent.SkillPermissionAccepted',
  AlexaSkillEventSkillPermissionChanged = 'AlexaSkillEvent.SkillPermissionChanged',

  AlexaHouseholdListEventListCreated = 'AlexaHouseholdListEvent.ListCreated',
  AlexaHouseholdListEventListUpdated = 'AlexaHouseholdListEvent.ListUpdated',
  AlexaHouseholdListEventListDeleted = 'AlexaHouseholdListEvent.ListDeleted',
  AlexaHouseholdListEventItemsCreated = 'AlexaHouseholdListEvent.ItemsCreated',
  AlexaHouseholdListEventItemsUpdated = 'AlexaHouseholdListEvent.ItemsUpdated',
  AlexaHouseholdListEventItemsDeleted = 'AlexaHouseholdListEvent.ItemsDeleted',

  MessagingMessageReceived = 'Messaging.MessageReceived',

}
// @formatter:on

export default Request;
