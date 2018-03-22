import {Request as RequestItem, RequestBody, Response} from 'alexa-sdk';
import Provider from './Provider';

abstract class Request<T extends RequestItem> {
  readonly event: RequestBody<T>;
  readonly provider: Provider;

  // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
  constructor(provider: Provider) {
    this.provider = provider;
    this.event = <RequestBody<T>>provider.skill.event;
  }

  async run(): Promise<any> {
  }

  // noinspection JSUnusedGlobalSymbols
  getSession() {
    return this.provider.skill.response.sessionAttributes;
  }

  getResponse(): Response {
    return this.provider.skill.response.response;
  }

}

export default Request;
