import Response from '../../Enumeration/Response';
import Base from '../Request';

class Error extends Base<any> {
  async run(): Promise<any> {
    const response = this.getResponse();
    response[Response.outputSpeech] = {type: 'PlainText', text: 'no match request'};
    response.shouldEndSession = true;
  }

}

export default Error;
