import {Context, OutputSpeech, Request, RequestBody} from 'alexa-sdk';
import Response, {OutputSpeechType} from '../Enumeration/Response';
import Base from './Base';
import Resource from './Resource';

class Route extends Base {
  // protected skills: { [index: string]: any } = {};
  // protected readonly resource: Resource;
  protected readonly resource: Resource;

  // noinspection JSUnusedGlobalSymbols
  constructor(event: RequestBody<Request>, context: Context, callback: Function) {
    super();
    this.resource = this.getResource(event, context, callback);
  }

  // noinspection JSMethodCanBeStatic
  protected getResource(event: RequestBody<Request>, context: Context, callback: Function): Resource {
    return new Resource(event, context, callback);
  }

  async run() {
    try {

    } catch (error) {

    }

  }

  protected fireError(error: any) {
    const body = this.resource.responseBody;
    const response = body.response;
    const speech: OutputSpeech = {type: OutputSpeechType.PlainText, text: ''};
    response.shouldEndSession = true;

    if (error instanceof Error) {
      speech.text = error.message;
    } else {
      speech.text = '';
    }

    response[Response.outputSpeech] = speech;

  }

  protected getSkill() {
    const items = this.makeSkills();
    const index = this.resource.requestBody.session.application.applicationId;

    if (false === items.hasOwnProperty(index)) {
      throw new Error();
    }

  }

  protected makeSkills(): { [index: string]: any } {
    return {};
  }

}
