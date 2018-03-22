import logger from 'object-logger';
import * as util from 'util';

export default abstract class Base {

  // noinspection JSMethodCanBeStatic
  protected clone(item: any) {
    return (undefined === item) ? undefined : JSON.parse(JSON.stringify(item));
  }

  // noinspection JSMethodCanBeStatic
  protected debug(title: string, item: any, options: util.InspectOptions = {}) {
    if (false === process.env.hasOwnProperty('AWS_SESSION_TOKEN')) {
      options.colors = true;
    }

    const text = logger.inspectWrapper(item, options);
    console.log(`[${title}]\n${text}`);
  }

}
