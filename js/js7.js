// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры
    // firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в
    // обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
    
    firstArray.forEach(firstArrayElement => {
        if (secondArray.includes(firstArrayElement)) {
            commonElements.push(firstArrayElement);
        };
    });

  return commonElements;
  // Change code above this line
}