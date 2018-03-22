import Request from './Enumeration/Request';
import Base from './Extend/Base';
import RequestError from './Extend/Request/Error';
import Intent from './Extend/Request/Intent';
import Launch from './Extend/Request/Launch';
import SessionEnded from './Extend/Request/SessionEnded';
import RequestInstance from './Request';
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
