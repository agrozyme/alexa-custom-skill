import {LaunchRequest} from 'alexa-sdk';
import Base from '../Request';

class Launch extends Base<LaunchRequest> {
  async run(): Promise<any> {
    this.getResponse().shouldEndSession = false;
  }

}

export default Launch;
