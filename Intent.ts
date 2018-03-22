import Base from './Extend/Base';
import RequestIntent from './Extend/Request/Intent';

abstract class Intent extends Base {
  readonly request: RequestIntent;
  protected slots: { [index: string]: any } = {};

  // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
  constructor(request: RequestIntent) {
    super();
    this.request = request;
  }

  async run(): Promise<any> {
  }

}

export default Intent;
