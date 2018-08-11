import mockConsole from 'jest-mock-console';

import logger from '../src';

describe('log', () => {
  beforeEach(() => {
    mockConsole(['error', 'log', 'trace']);
  });

  test('logger', () => {
    const log = logger();
    log.info('batman');

    expect(console.error).toHaveBeenCalled();
    expect((console.error as any).mock.calls[0]).toMatchSnapshot();
  });

  test('level', () => {
    const log = logger({ level: 'warn' });
    log.info('batman');

    expect(console.error).not.toHaveBeenCalled();
  });

  test('preface', () => {
    const log = logger({ preface: '⋊ batcave ⋉' });
    log.info('batman');

    expect(console.error).toHaveBeenCalled();
    expect((console.error as any).mock.calls[0]).toMatchSnapshot();
  });

  test('timestamp', () => {
    const log = logger({ timestamp: true });
    log.info('batman');

    expect(console.error).toHaveBeenCalled();
    expect((console.error as any).mock.calls[0][0]).toMatch(/^\[\d\d:\d\d:\d\d\]\s/);
  });

  test('auxillary', () => {
    const log = logger();
    log.pass('batman');
    log.fail('joker');

    expect(console.log).toHaveBeenCalled();
    expect((console.log as any).mock.calls[0]).toMatchSnapshot();
    expect((console.log as any).mock.calls[1]).toMatchSnapshot();
  });

  test('unique', () => {
    const log = logger({ id: '0' });
    const log1 = logger({ id: '1', level: 'error' });
    log.info('batman');
    log1.info('batman');

    expect(console.error).toHaveBeenCalled();
    expect((console.error as any).mock.calls[0]).toMatchSnapshot();
    expect((console.error as any).mock.calls[1]).toMatchSnapshot();
  });

  test('debug, trace', () => {
    const log = logger({ level: 'trace' });
    log.debug('batcave');
    log.trace('joker');

    expect(console.log).toHaveBeenCalled();
    expect((console.log as any).mock.calls[0]).toMatchSnapshot();

    expect(console.trace).toHaveBeenCalled();
    expect((console.trace as any).mock.calls[1]).toMatchSnapshot();
  });
});
