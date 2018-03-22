// @formatter:off
enum Response {
  outputSpeech = 'outputSpeech',
  card = 'card',
  reprompt = 'reprompt',
  directives = 'directives',
}
// @formatter:on

// @formatter:off
export enum OutputSpeechType {
  PlainText = 'PlainText',
  SSML = 'SSML',
}
// @formatter:on

export default Response;
