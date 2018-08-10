const chalk = require('chalk');

// eslint-disable-next-line import/no-unresolved
const { logger } = require('../dist/index');

const { log: line } = console;
const log = logger({ level: 'debug' });
const timeLog = logger({ timestamp: true });

line();

log.info('batman');
log.warn('aliens');
log.error('joker');
log.debug('batcave');

line();

timeLog.info('time to wash the batmobile');

line();

log.fail(chalk`{red mansion blowed up}`);
log.pass(chalk`batcave is {green {bold clean}}`);
