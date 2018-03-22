import Response from '../../Enumeration/Response';
import Base from '../../Intent';

class Error extends Base {
  async run(): Promise<any> {
    const response = this.request.getResponse();
    response[Response.outputSpeech] = {type: 'PlainText', text: 'no match intent'};
    response.shouldEndSession = true;
  }

}

export default Error;
