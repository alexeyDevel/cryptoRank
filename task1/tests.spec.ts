// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import coinDistribution from './coinDistribution';

describe('coinDistribution', () => {
  test('should return an array of possible combinations', () => {
    const availableCoins = { ETH: 4, TRON: 5, MATIC: 1 };
    const participantsRequested = [
      'ETH',
      'ETH',
      'ETH/TRON',
      'TRON/ETH',
      'TRON/MATIC',
      'TRON',
      'MATIC',
    ];
    const result = coinDistribution(availableCoins, participantsRequested);
    expect(result).toEqual([
      ['ETH', 'ETH', 'ETH', 'TRON', 'TRON', 'TRON', 'MATIC'],
      ['ETH', 'ETH', 'ETH', 'ETH', 'TRON', 'TRON', 'MATIC'],
      ['ETH', 'ETH', 'TRON', 'TRON', 'TRON', 'TRON', 'MATIC'],
      ['ETH', 'ETH', 'TRON', 'ETH', 'TRON', 'TRON', 'MATIC'],
    ]);
  });

  test('should return an array of possible combinations', () => {
    const availableCoins = { ETH: 3, TRON: 2, MATIC: 1, ROC: 1 };
    const participantsRequested = [
      'ETH',
      'ETH',
      'ETH/TRON',
      'TRON/ETH',
      'ROC/MATIC',
      'TRON',
      'MATIC',
    ];
    const result = coinDistribution(availableCoins, participantsRequested);
    expect(result).toEqual([
      ['ETH', 'ETH', 'ETH', 'TRON', 'ROC', 'TRON', 'MATIC'],
      ['ETH', 'ETH', 'TRON', 'ETH', 'ROC', 'TRON', 'MATIC'],
    ]);
  });
  test('should return empty array', () => {
    const availableCoins = { ETH: 3, TRON: 2, MATIC: 1, ROC: 1 };
    const participantsRequested = [
      'ROC',
      'ETH',
      'ETH/TRON',
      'TRON/ETH',
      'ROC/MATIC',
      'TRON',
      'MATIC',
    ];
    const result = coinDistribution(availableCoins, participantsRequested);
    expect(result).toEqual([]);
  });
  test('should return empty array', () => {
    const availableCoins = {};
    const participantsRequested = [
      'ROC',
      'ETH',
      'ETH/TRON',
      'TRON/ETH',
      'ROC/MATIC',
      'TRON',
      'MATIC',
    ];
    const result = coinDistribution(availableCoins, participantsRequested);
    expect(result).toEqual([]);
  });
  test('should return empty array', () => {
    const availableCoins = { ETH: -3, TRON: 2, MATIC: 1, ROC: 1 };
    const participantsRequested = ['ETH/TRON', 'TRON/ETH', 'TRON', 'MATIC'];
    const result = coinDistribution(availableCoins, participantsRequested);
    expect(result).toEqual([]);
  });
  test('should return empty array', () => {
    const availableCoins = { ETH: 2, TRON: 0, MATIC: 1, ROC: 1 };
    const participantsRequested = ['ETH/TRON', 'TRON/ETH', 'TRON', 'MATIC'];
    const result = coinDistribution(availableCoins, participantsRequested);
    expect(result).toEqual([]);
  });
});
