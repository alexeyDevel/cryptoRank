import { convertCurrency } from './converting';

describe('test for convertCurrency', () => {
  test('should convert the currency correctly', () => {
    expect(convertCurrency('10', '2', '4')).toBe(5);
    expect(convertCurrency('5', '1', '2')).toBe(2.5);
    expect(convertCurrency('100', '10', '5')).toBe(200);
    expect(convertCurrency('50', '5', '2')).toBe(125);
    expect(convertCurrency('10', '0.5', '0.2')).toBe(25);
    expect(convertCurrency('3.5', '0.7', '1.4')).toBe(1.75);
    expect(convertCurrency('8.25', '1.5', '3')).toBe(4.125);
  });

  test('should throw an error for invalid input', () => {
    expect(() => {
      convertCurrency('0', '0', '0');
    }).toThrowError();
    expect(() => {
      convertCurrency('10', 'abc', '5');
    }).toThrowError();
    expect(() => {
      convertCurrency('abc', '10', '5');
    }).toThrowError();
    expect(() => {
      convertCurrency('10', '2', 'abc');
    }).toThrowError();
  });
});
