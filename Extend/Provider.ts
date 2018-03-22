import Request from '../Enumeration/Request';
import Base from './Base';
import RequestInstance from './Request';
import RequestError from './Request/Error';
import Intent from './Request/Intent';
import Launch from './Request/Launch';
import SessionEnded from './Request/SessionEnded';
import Skill from './Skill';

class Provider extends Base {
  readonly skill: Skill;
  protected requests: { [index: string]: any } = {};
  protected readonly errorIndex = Symbol();

  constructor(skill: Skill) {
    super();
    this.skill = skill;
    this.requests = this.makeRequests();
  }

  getRequest(): RequestInstance<any> {
    const items = this.requests;
    const type = this.skill.event.request.type;
    const className = items.hasOwnProperty(type) ? items[type] : items[this.errorIndex];
    return new className(this);
  };

  protected makeRequests() {
    const items: { [index: string]: any } = {};
    items[this.errorIndex] = RequestError;
    items[Request.IntentRequest] = Intent;
    items[Request.LaunchRequest] = Launch;
    items[Request.SessionEndedRequest] = SessionEnded;
    return items;
  }

}

export default Provider;
