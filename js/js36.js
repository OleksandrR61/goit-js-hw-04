// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств
    // (свойство balance) которые хранят пользователи из массива users.

// Change code below this line
const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);
// Change code above this line