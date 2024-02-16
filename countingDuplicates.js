function duplicateCount(text) {
  const countDuplicates = {};
  const textLowerCase = text.toLowerCase();

  for (let i = 0; i < textLowerCase.length; i++) {
    const char = textLowerCase[i];
    countDuplicates[char] = (countDuplicates[char] || 0) + 1;
  }

  const count = Object.values(countDuplicates).filter(item => item > 1).length;
  return count;
}