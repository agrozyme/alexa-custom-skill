import {Context, Request, RequestBody, ResponseBody} from 'alexa-sdk';
import {isUndefined} from 'util';
import Base from './Base';

class Resource extends Base {
  readonly callback: Function;
  readonly context: Context;
  readonly requestBody: RequestBody<Request>;
  readonly responseBody: ResponseBody = {version: '1.0', sessionAttributes: {}, response: {shouldEndSession: true}};

  constructor(event: RequestBody<Request>, context: Context, callback: Function) {
    super();
    this.requestBody = event;
    this.context = context;
    this.callback = callback;
    this.responseBody.sessionAttributes = this.getSessionAttributes();
  }

  protected getSessionAttributes() {
    const items = this.requestBody.session.attributes;
    return isUndefined(items) ? {} : items;
  }

}

export default Resource;
