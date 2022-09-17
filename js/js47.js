// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей
    // (свойство friends) отсортированный по алфавиту.

// Change code below this line
const getSortedFriends = users =>
    users.flatMap(user => user.friends)
        .filter((friend, index, friends) => friends.indexOf(friend) === index)
        .sort((a, b) => a.localeCompare(b));
// Change code above this line