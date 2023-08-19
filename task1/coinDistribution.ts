type TParticipants = Array<string>;
type TAvailableCoins = Record<string, number>;
function getCombinations(arrays) {
  function generateCombinations(currentIndex, currentCombination) {
    // Если текущий индекс равен длине массивов, значит мы собрали полную комбинацию
    if (currentIndex === arrays.length) {
      combinations.push(currentCombination);
      return;
    }
    // Иначе, проходимся по элементам текущего массива и рекурсивно вызываем функцию для следующего массива
    for (let i = 0; i < arrays[currentIndex].length; i++) {
      const newCombination = currentCombination.concat(arrays[currentIndex][i]);
      generateCombinations(currentIndex + 1, newCombination);
    }
  }
  const combinations = [];
  generateCombinations(0, []);
  return combinations;
}
function countWordFrequency(words) {
  const frequency = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (frequency[word]) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  }
  return frequency;
}

function coinDistribution(
  availableCoins: TAvailableCoins,
  participantsRequested: TParticipants,
) {
  const bank = availableCoins;
  if (Object.keys(bank).length === 0) {
    return [];
  }
  const requested = participantsRequested.map((item) => item.split('/'));
  const combinations = getCombinations(requested);
  const totalCombinations = combinations.map((item) => {
    return {
      arr: item,
      combo: countWordFrequency(item),
    };
  });
  const resultComb = totalCombinations.filter((item) => {
    for (const comboKey in item.combo) {
      if (item.combo[comboKey] > bank[comboKey]) return false;
    }
    return true;
  });
  const result = resultComb.map((item) => item.arr);
  return result.length > 0 ? result : [];
}

export default coinDistribution;
