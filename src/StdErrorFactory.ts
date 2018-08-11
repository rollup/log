import loglevel from 'loglevelnext';

const { PrefixFactory } = loglevel.factories;

export class StdErrorFactory extends PrefixFactory implements StdErrorFactory {
  logger: any;
  stderr: any[];

  constructor(log: any, prefix: any, stderr: any[]) {
    super(log, prefix);
    this.stderr = stderr;
  }

  bindMethod(obj: any, methodName: string) {
    const targets = this.stderr;
    const useName = targets.includes(methodName) ? 'error' : methodName;

    return super.bindMethod(obj, useName);
  }

  replaceMethods(...args: any[]) {
    super.replaceMethods(...args);

    this.logger.fail = super.make('fail');
    this.logger.pass = super.make('pass');
  }
}
