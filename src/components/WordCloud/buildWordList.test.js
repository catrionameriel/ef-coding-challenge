import {
  removePunctuationFrom,
  filterOutSmallWordsFrom,
  filterOutBlacklistWordsFrom,
  countWordsIn
} from './buildWordList';

describe('build word list', () => {
  test('removes all punctuation and numbers', () => {
    const input = '.,/!$%&*;:\'-()1234567890a';
    const expected = '                        a';
    expect(removePunctuationFrom(input)).toEqual(expected);
  });

  test('filters out two letter words', () => {
    const input = ['at', 'to', 'from'];
    const expected = ['from'];
    expect(filterOutSmallWordsFrom(input)).toEqual(expected);
  });

  test('filter out words from blacklist', () => {
    const input = ['think', 'up', 'words'];
    const blacklist = ['think'];
    const expected = ['up', 'words']
    expect(filterOutBlacklistWordsFrom(input, blacklist)).toEqual(expected);
  })

  test('count words into object', () => {
    const input = ['good', 'bad', 'rubbish', 'good'];
    const expected = { good: 2, bad: 1, rubbish: 1};
    expect(countWordsIn(input)).toEqual(expected);
  })
})
