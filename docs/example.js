const chalk = require('chalk');

// eslint-disable-next-line import/no-unresolved
const { logger } = require('../dist/index');

const log = logger({ level: 'debug' });
const timeLog = logger({ timestamp: true });

console.log();

log.info('batman');
log.warn('aliens');
log.error('joker');
log.debug('batcave');

console.log();

timeLog.info('time to wash the batmobile');

console.log();

log.fail(chalk`{red mansion blowed up}`);
log.pass(chalk`batcave is {green {bold clean}}`);
