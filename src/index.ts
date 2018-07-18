import chalk from 'chalk';
import loglevel from 'loglevelnext';
import uuid from 'uuid/v4';
import { Colors, Options, Prefix } from './types';

import { StdErrorFactory } from './StdErrorFactory';

const enum LogLevel {
  trace = 'trace',
  debug = 'debug',
  info = 'info',
  warn = 'warn',
  error = 'error'
};

const colors: Colors = {
  trace: chalk`{cyan ⓡ} `,
  debug: chalk`{magenta ⓡ  debug:}`,
  info: chalk`{blue ⓡ} `,
  warn: chalk`{yellow ⓡ} `,
  error: chalk`{red ⓡ} `,
  pass: chalk`{green ⓡ} `,
  fail: chalk`{red ⓡ} `
};

const defaults: Options = {
  level: LogLevel.info,
  timestamp: false
};

export const logger = (opts: Options) => {
  const unique = { id: uuid() };
  const options: Options = {...defaults, ...unique, ...opts};
  const prefix: Prefix = {
    level: ({ level }: { level: string }) => colors[level],
    template: `{{level}} ${options.preface || ''}`
  };

  if (options.timestamp) {
    prefix.template = `[{{time}}] ${prefix.template}`;
  }

  options.name = options.id;

  const log = loglevel.getLogger(options);

  log.factory = new StdErrorFactory(log, prefix);

  return log;
};


export default logger;

export function deleteLogger(id: string) {
  delete loglevel.loggers[id];
};

export const factories = loglevel.factories;
