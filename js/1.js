//    'use strict'
//    #1

// const productName = 'Droid';
// console.log(productName);

// const pricePerItem = 2000;
// console.log(pricePerItem);


//           #2

// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line

// productName = 'Repair droid';
// pricePerItem = 3500;


//         #3

// Change code below this line
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;


//        #4

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = (pricePerItem * orderedQuantity);



//           #5

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;


//         #6

//         Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = ((pricePerDroid * orderedQuantity) + deliveryFee);
// const message =`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;



// const shouldRenew = confirm('gsgsdgdsgd');
// console.log(shouldRenew);
// const masage = ('введите к-во товара');

// let quantity = prompt(masage);
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);



//          #7

//          Change code below this line
// function sayHi(sayHi) {
//   console.log("Hello, this is my first function!");
  
// }
// sayHi();



//           #8


//  Change code below this line
// function add(a, b, c) {
//   console.log("Addition result equals <a + b + c>");
//   // Change code above this line
// }
// function add(a, b, c) {
//   console.log(`Addition result equals ${15 + 27 + 10}`);
//   console.log(`Addition result equals ${10 + 20 + 30}`);
//   console.log(`Addition result equals ${5 + 10 + 15}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);




//                 #9

// function add(a, b, c) {
//   // Change code below this line
// return a + b + c;
  
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));



//                 #10

// function makeMessage (name, price) {
//    Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits` ;
//    Change code above this line
//   return message;
// };


//          #11

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = (orderedQuantity * pricePerItem);

//   // Change code above this line
//   return totalPrice;
// };



//         #12

//    function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

// const message = `You ordered droids worth ${((orderedQuantity * pricePerDroid) + deliveryFee)} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }


//          #13

//         function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }


//         #14


//         function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }



//        #15

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
   
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }


//           #16

//         function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if (available > ordered) {
//   message = `Order is processed, our manager will contact you.`;
  
// }
//   else {
//     message = `Not enough goods in stock!`;
//   }
//   // Change code above this line
//   return message;
// }


//         #17

//        let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

//    #18

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// const totalPric = pricePerDroid * orderedQuantity;
//   if(totalPric > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     customerCredits = customerCredits - totalPric;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }
//   // Change code above this line
//   return message;
// }


//       #19

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }


//      #20

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if (ordered  === 0) {
//   message = "There are no products in the order!";
// }
//   else if(ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
  
//   // Change code above this line
//   return message;
// }


//        #21

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }


//               #22
// function checkIfCanAccessContent(subType) {
//  const canAccessContent = subType === "pro" || subType === "vip" ; // Change this line

//   return canAccessContent;
// }


//             №23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange ; // Change this line

//   return isNotInRange;
// }






//         №24
// function getDiscount(totalSpent) {
//         const BASE_DISCOUNT = 0;
//         const BRONZE_DISCOUNT = 0.02;
//         const SILVER_DISCOUNT = 0.05;
//         const GOLD_DISCOUNT = 0.1;
//         let discount;

//        if (totalSpent < 5000) {
//          discount = BASE_DISCOUNT;
//        } 
//   else if (totalSpent >= 5000 && totalSpent <= 19999) {
//     discount = BRONZE_DISCOUNT;
//   }
//   else if (totalSpent >=20000 && totalSpent <=49999) {
//     discount = SILVER_DISCOUNT;
//   }
//   else if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   }
  
//         return discount;
// }

//               #25
// function checkStorage(available, ordered) {
//         let message = (ordered > available) ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//         return message;
// }
        
// b)
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   message = (ordered > available) ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   // Change code above this line
//   return message;
// }


//             №26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// message = (password ===ADMIN_PASSWORD) ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }


//         №27

// function getSubscriptionPrice(type) {
//         let price;
//         switch (type) {
//                 case "starter":
//                         price = 0;
//                         break;
//                 case "professional":
//                         price = 20;
//                         break;
//                 case "organization":
//                         price = 50;
//                         break;
//         }
//         return price;
// }

//               #28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// switch (password) {
//   case null:
// }
//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }









//             №29
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//   case "Australia":
//   message = "Shipping to Australia will cost 170 credits"
//     break;
//    case "Germany":
//   message = "Sorry, there is no delivery to your country"
//     break;
//     case "China":
//   message = "Shipping to China will cost 100 credits"
//     break;
//     case "Chile":
//   message = "Shipping to Chile will cost 250 credits"
//     break;
//     case "Jamaica":
//   message = "Shipping to Jamaica will cost 120 credits"
//     break;
//      case "Sweden":
//     message = "Sorry, there is no delivery to your country"
// }
//   // Change code above this line
//   return message;
// }


//         №30
//  function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }








//          №31
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = (courseTopic.length);
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopic[20]);
         
//         №32
// function getSubstring(string, length) {
//         const substring = string.slice(0, length);

//         return substring;
//  }
//          №33
// function formatMessage(message, maxLength) {
//         let result;

//         result = message.length <= maxLength ?
//                 message : `${message.slice(0, maxLength)}...`;
        
//         return result;
// }
         
//         №34
//  function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
//          №35
// function checkFormName(fullName, name) {
//         const result = fullName.includes((name));

//         return result;
// }
         
//         №36
// function checkFormSpam(message) {
//         let result;

//         result = message.toUpperCase().includes("SPAM") || message.toUpperCase().includes("SALE");

//         return result;
//  }
        




// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

// switch (password){
// case null:
// return message = "Canceled by user!";

// case ADMIN_PASSWORD:
// return message = "Welcome!";

//         default:
//                 return message = "Access denied, wrong password!";
// }

