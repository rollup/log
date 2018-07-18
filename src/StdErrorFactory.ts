
import loglevel from 'loglevelnext';

const { PrefixFactory } = loglevel.factories;

export class StdErrorFactory extends PrefixFactory {
  logger: any;

  constructor(log: any, prefix: any) {
    super(log, prefix);
  }

  bindMethod(obj: any, methodName: string) {
    const targets = ['info', 'warn', 'error', 'pass', 'fail'];
    const useName = targets.includes(methodName) ? 'error' : methodName;

    return super.bindMethod(obj, useName);
  }

  replaceMethods(...args: any[]) {
    super.replaceMethods(...args);

    this.logger.fail = super.make('fail');
    this.logger.pass = super.make('pass');
  }
};
