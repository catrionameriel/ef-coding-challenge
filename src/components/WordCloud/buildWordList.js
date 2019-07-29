export function calculateWordFrequency(reviews, blacklist) {
  const seperatedWords = createStringArrayFrom(reviews);
  const filteredOutSmallWordsList = filterOutSmallWordsFrom(seperatedWords);
  const filteredOutBlackListWords = filterOutBlacklistWordsFrom(filteredOutSmallWordsList, blacklist);
  return countWordsIn(filteredOutBlackListWords);
}

export function createStringArrayFrom(array) {
  const string = removePunctuationFrom(array.join());
  return string.split(' ');
}

export function removePunctuationFrom(string) {
  const newString = string.replace(/[.,/!$%&*;:'\-()0-9]/g, ' ');
  return newString.toLowerCase();
}

export function filterOutSmallWordsFrom(array) {
  return array.filter(word => word.length > 2)
}

export function filterOutBlacklistWordsFrom(array, blacklist) {
  array = array.filter((word) => {
    return !blacklist.includes(word);
  });
  return array;
}

export function countWordsIn(array) {
  const list = {};
  array.forEach((word) => {
    if (!list[word]) {
      list[word] = 1;
    } else {
      list[word] += 1;
    }
  });
  return list;
}
