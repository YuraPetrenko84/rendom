//       №1
//       function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

        //№2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return "Pizza Royal Grand is being prepared, please wait...";
 
// }
// function makeMessage(pizzaName, callback){
//  return callback(pizzaName);
// }
        //№3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`eatPizza${pizzaName}.`);
// });
        //№4
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     if (this.pizzas.includes(pizzaName)) {
//         return makePizza(pizzaName);
//     }
//       return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
        //№5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

// orderedItems.forEach(item => totalPrice += item)
//   // Change code above this line
//   return totalPrice;
// }
        //№6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(element => {
//    if (element > value) {
//       filteredNumbers.push(element);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }
        //№7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (el) {
//     if (secondArray.includes(el)) {
//       commonElements.push(el);
//     }
//   })
  

//   return commonElements;
//   // Change code above this line
// }

        //№8
// // Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {

//   return quantity * pricePerItem;
// }
        //№9
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;

// // Change code above this line

        //№10
// const calculateTotalPrice = orderedItems => {
//     let totalPrice = 0;
//     orderedItems.forEach(item => {
//         totalPrice += item;
//     });
//     return totalPrice;
// };
        //№11
// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
        //№12
// Change code below this line

// const getCommonElements = (firstArray, secondArray) => {
//         const commonElements = [];

//         firstArray.forEach((element) => {
//                 if (secondArray.includes(element)) {
//                         commonElements.push(element);
//                 }
//         });

//         // Change code above this line
//         return commonElements;
// };

        //№13
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = []
//     numbers.forEach((number, index) => {
//     if(number % 2 === 0){
//       newArray.push(number + value);
//     } else(newArray.push(number))
//   })
//  return newArray
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10))
         
       //№14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length)
// console.log(planetsLengths)
        
       //№15
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
        //№16
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line
// const genres = books.flatMap(book => book.genres);
        //№17
// Change code below this line
// const getUserNames = users => {
//    const names = users.map(user => user.name)
// return names
//   };
  // Change code above this line
        //№18
// Change code below this line
// const getUserEmails = users => {
//     const email = users.map(user => user.email)
// return email

//   };
        //№19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(numbers => numbers % 2 == 0);
// const oddNumbers = numbers.filter(numbers => numbers % 2 !== 0);
        //№20
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(books => books.genres);
// const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index
// );
        //№21
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(books => books.rating >= MIN_RATING);
// const booksByAuthor = books.filter(books => books.author === AUTHOR);
        //№22
//  const getUsersWithEyeColor = (users, color) =>
//  users.filter(user => user.eyeColor === color)
        //№23
// const getUsersWithAge = (users, minAge, maxAge) => {
// const result = users.filter((user) => {
//      if( user.age >= minAge && user.age <= maxAge){
//        return user;
//      }
// })
// return result
// };

        //№24
// const getUsersWithFriend = (users, friendName) =>  users.filter(({friends})=>friends.includes(friendName))
        //№25
// const getFriends = users => users.flatMap(user => user.friends).filter((friend,
//         index, array) => array.indexOf(friend) === index)
        //№26
// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive === true).filter(user => user.name !== true);
   
// };
        //№27
// const getInactiveUsers = (users) => {
//   return users.filter(user => user.isActive !== true )
  
// };
        //№28
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(books => books.title === BOOK_TITLE);
// const bookByAuthor = books.find(books => books.author === AUTHOR);

        //№29
// Change code below this line
// const getUserWithEmail = (users, email) => {
//     return users.find(users => users.email === email)
// };
        //№30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
//  const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);
        //№31
// // Change code below this line
// const isEveryUserActive = (users) => {
  
//   return users.every(user => user.isActive === true )
// };
// // Change code above this line

        //№32
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);
        //№33
// Change code below this line
// const isAnyUserActive = users => {
//  return users.some(user => user.isActive === true )
// };
// // Change code above this line
        //№34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, playtime) => acc + playtime, 0)

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
        

//№35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, {playtime, gamesPlayed}) => acc + playtime / gamesPlayed,0);
        

//№36
// const calculateTotalBalance = users =>
//   users.reduce((totalBalance, number) => totalBalance + number.balance, 0);
        

//№37
// const getTotalFriendCount = users => users.reduce((friend, user) => friend + user.friends.length, 0);
       

//№38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
        

//№39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
        

//№40
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
        

//№41
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author));
// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author));
// const sortedByAscendingRating = [...books].sort((
//   firstBook, secondBook) => firstBook.rating - secondBook.rating);
// const sortedByDescentingRating = [...books].sort((
//   firstBook, secondBook) => secondBook.rating - firstBook.rating);
        

//№42
// Change code below this line
// const sortByAscendingBalance = users =>
//  users.sort((a, b) => a.balance - b.balance);

// Change code above this line
        

//№43
// const sortByDescendingFriendCount = users => {return [...users].sort((a, b) => b.friends.length - a.friends.length)};
       

//№44
// const sortByName = users =>
// [...users].sort((a, b) => a.name > b.name ? 1 : -1);
        

//№45
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// Change code below this line

// const names = [...books].filter((books)=> books.rating > MIN_BOOK_RATING).map((books)=> books.author).sort((authorFirst, authorSecond) => authorFirst.localeCompare(authorSecond));
        

//№46
// const getNamesSortedByFriendCount = users =>
//   [...users].sort((a,b) => a.friends.length - b.friends.length).map(user => user.name);
        

//№47
// const getSortedFriends = users =>[...users]
//   .flatMap((user) => user.friends)
//   .filter((friend, index, array) => array.indexOf(friend) === index)
//   .sort((firstFriends, secondFriends) => firstFriends.localeCompare(secondFriends))
        

//№48
        // Change code below this line
// const getTotalBalanceByGender = (users, gender) => 
// [...users].filter(user => user.gender === gender).reduce((total, user)=>{return total+user.balance},0);

// Change code above this line