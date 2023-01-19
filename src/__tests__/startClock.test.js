import { startClock } from '../lib/startClock';

let _Date;

describe('startClock should', () => {
  test('give the actual time in hh:mm:ss format', () => {
    const MOCKED_DATE = new Date('2023-01-19T12:16:20');
    global.Date = jest.fn(() => MOCKED_DATE);

    const formattedDate = startClock(new Date());

    expect(formattedDate).toBe('12:16:20');
    global.Date = _Date;
  });
});
