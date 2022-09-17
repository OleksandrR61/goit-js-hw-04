// Используя метод every() дополни код так, чтобы:

    // В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на
        // чётность.
    // В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на
        // нечётность.
    // В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на
        // чётность.
    // В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на
        // нечётность.
    // В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на
        // чётность.
    // В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на
        // нечётность.

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(element => !(element % 2));
const eachElementInFirstIsOdd = firstArray.every(element => element % 2);

const eachElementInSecondIsEven = secondArray.every(element => !(element % 2));
const eachElementInSecondIsOdd = secondArray.every(element => element % 2);

const eachElementInThirdIsEven = thirdArray.every(element => !(element % 2));
const eachElementInThirdIsOdd = thirdArray.every(element => element % 2);