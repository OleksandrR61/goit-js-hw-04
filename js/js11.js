// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}