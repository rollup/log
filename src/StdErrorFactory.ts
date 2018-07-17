
import loglevel from 'loglevelnext';

const { PrefixFactory } = loglevel.factories;

export class StdErrorFactory extends PrefixFactory {
  constructor(log: any, prefix: any) {
    super(log, prefix);
  }

  bindMethod(obj: any, methodName: string) {
    const targets = ['info', 'warn', 'error'];
    const useName = targets.includes(methodName) ? 'error' : methodName;

    return super.bindMethod(obj, useName);
  }
};
