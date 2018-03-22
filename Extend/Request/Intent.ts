import {IntentRequest} from 'alexa-sdk';
import IntentInstance from '../Intent';
import IntentError from '../Intent/Error';
import Provider from '../Provider';
import Base from '../Request';

abstract class Intent extends Base<IntentRequest> {
  readonly intents: { [index: string]: any } = {};
  protected readonly errorIndex = Symbol();

  // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
  constructor(provider: Provider) {
    super(provider);
    this.intents = this.makeIntents();
  }

  getIntent(): IntentInstance {
    const items = this.intents;
    const intent = this.event.request.intent;

    if (intent) {
      const name = intent.name;
      const className = items.hasOwnProperty(name) ? items[name] : items[this.errorIndex];
      return new className(this);
    } else {
      throw this.provider.skill.response;
    }
  };

  // noinspection JSMethodCanBeStatic
  protected makeIntents() {
    const items: { [index: string]: any } = {};
    items[this.errorIndex] = IntentError;
    return items;
  }

  async run(): Promise<any> {
    return this.getIntent().run();
  }
}

export default Intent;
