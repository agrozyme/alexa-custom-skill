import {SessionEndedRequest} from 'alexa-sdk';
import Base from '../Request';

class SessionEnded extends Base<SessionEndedRequest> {
  async run(): Promise<any> {
    this.getResponse().shouldEndSession = true;
  }

}

export default SessionEnded;
