import {
  getCommaSeparatedValue,
  getDayForTimeLine,
  getRandomDate,
  getRandomElement,
  keyExtractor,
  removeCommaFromPrice,
} from './utils'; // Replace 'yourModule' with the actual module path

describe('keyExtractor', () => {
  it('generates unique keys', () => {
    const arr = ['item1', 'item2', 'item3'];
    const keys = arr.map(keyExtractor);
    const uniqueKeys = new Set(keys);
    expect(uniqueKeys.size).toBe(arr.length);
  });
});

describe('getRandomElement', () => {
  it('returns undefined for an empty array', () => {
    expect(getRandomElement([])).toBeUndefined();
  });

  it('returns an element for a non-empty array', () => {
    const arr = [1, 2, 3];
    const result = getRandomElement(arr);
    expect(arr.includes(result)).toBe(true);
  });
});

describe('getRandomDate', () => {
  it('returns a date string in the correct format', () => {
    const randomDate = getRandomDate();
    const regex = /^\d{4}-\d{2}-\d{2}$/; // yyyy-MM-dd format
    expect(regex.test(randomDate)).toBe(true);
  });
});

describe('getDayForTimeLine', () => {
  it('returns a day and date string', () => {
    const dayAndDate = getDayForTimeLine();
    expect(dayAndDate).toMatch(
      /^(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday), \d{1,2}$/,
    );
  });
});

describe('getCommaSeparatedValue', () => {
  it('returns a comma-separated value', () => {
    const number = '1234567';
    const commaSeparated = getCommaSeparatedValue(number);
    expect(commaSeparated).toBe('1,234,567');
  });

  it('handles empty input', () => {
    expect(getCommaSeparatedValue('')).toBe('');
  });
});

describe('removeCommaFromPrice', () => {
  it('removes commas from a comma-separated value', () => {
    const number = '1,234,567';
    const removedComma = removeCommaFromPrice(number);
    expect(removedComma).toBe(1234567);
  });

  it('handles empty input', () => {
    expect(removeCommaFromPrice('')).toBe(0);
  });
});
