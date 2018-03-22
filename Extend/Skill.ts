import {Context, Request, RequestBody, ResponseBody} from 'alexa-sdk';
import {isUndefined} from 'util';
import Base from './Base';
import Provider from './Provider';

export default abstract class Skill extends Base {
  readonly callback: Function;
  readonly context: Context;
  readonly event: RequestBody<Request>;
  readonly response: ResponseBody = {version: '1.0', sessionAttributes: {}, response: {shouldEndSession: true}};

  // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
  constructor(event: RequestBody<Request>, context: Context, callback: Function) {
    super();
    this.event = event;
    this.context = context;
    this.callback = callback;
    this.response.sessionAttributes = this.getSessionAttributes();
  }

  protected getSessionAttributes() {
    const items = this.event.session.attributes;
    return isUndefined(items) ? {} : items;
  }

  // noinspection JSUnusedGlobalSymbols
  async run() {
    try {
      this.debug('Request', this.event, {depth: null});
      await this.getProvider().getRequest().run();
      this.debug('Response', this.response, {depth: null});
      this.callback(null, this.response);
    } catch (error) {
      this.debug('Error', error);
      this.callback(error);
    }
  }

  protected abstract getProvider(): Provider;

}
