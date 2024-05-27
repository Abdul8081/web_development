// console.log('Hello Jee');

const { filter } = require("minimatch");

/*String vs object string */
// let lastName = 'Babbar';
// let firstName = new String('Babbar');
// console.log(typeof(lastName));
// console.log(typeof(firstName));

//creation of the primitive string to the object type
// console.log(lastName.length);
// console.log(lastName.includes('Ba'));
// console.log(lastName.startsWith('Love'));
// console.log(lastName.endsWith('ar'));
// console.log(lastName.indexOf('B'));
// console.log(lastName.toUpperCase());
// console.log(lastName.toLowerCase());
// console.log(lastName.trim());
// console.log(lastName.replace('Babb', 'car'));

/*Message Split */
// let message = 'this is my first Message';
// message.replace('first', 'second');
// let word = message.split(' ');
// console.log(word);

/**Template litterals */
// let message = 'this is my first message';
// let dynamic_name_example = 'is';
// let TemplateLitteral = 
// `this ${dynamic_name_example} 
// my first
// message`;
// console.log(TemplateLitteral);
//it's uses can be used in the email line
 
// let date = new Date();
// console.log(date);

// let date2 = new Date('june 20 1991 07:15');
// console.log(date2);
 
// let date3 = new Date(2005, 0, 14, 7);
// console.log(date3);

// date3.setFullYear(1947);
// console.log(date3);


/**Array  */
// let numbers = [1,4,5,7];
// console.log(numbers);

// //insertion at the nd
// numbers.push(9);
// console.log(numbers);
// //at the start
// numbers.unshift(8);
// console.log(numbers);

//insetion at the middle

// numbers.splice(2, 0, 'a', 'b', 'c');
// console.log(numbers);

//end-> push
//begining-> unshift
//middle-> splice

/**Seraching */

// console.log(numbers.indexOf(3));

//if number is not present in the numbers array then it will give the output as the -1

//we want to chek id a number exist in an array 
//this is not the correct way. or the good practice
// if(numbers.indexOf(4)!=-1){
//     console.log('present');
// }
// else{
//     console.log('Absent');
// }


/**Include way of searching*/

// console.log(numbers.includes(7));

/**More advancce method of searching */
//isme kaha se kaha tak search karna hai ye bhi optimised ho jayegi

// console.log(numbers.indexOf(4, 2));

//first entries is telling about -> which element have to find
//second parameter is telling about from which index have to start the finding operation

/**Lets do this ti the refrences */
// let courses = [
//     {no:1,naam:'Love'},
//     {no:2,naam:'Rahul'}
// ];
// console.log(courses);
/**Cheking for the serching */
//isme primitive wale methods se isko search nhi kar sakte!!
// console.log(courses.indexOf({n0:1,naam:'Love'}));

//now lets use the callback functio for the searching of the object(string);

// let course = courses.find(function(course){
//     return course.naam === 'Abdul';
// })
// console.log(course);

//above written code ko aur chhota kar sakte hai
// let course = courses.find(course=> course.naam ==='Rahul');
// console.log(course);

/**Removing the elemnet in the array */
// let numbers = [1,2,3,4,5,6,7];
// //end remove
// numbers.pop();
// console.log(numbers);
// //beginig remove
// numbers.shift(numbers);
// console.log(numbers);
// //middle se end
// numbers.splice(2,1);
// console.log(numbers);

/**Emptying the array */
//this is not the correct method
// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// numbers = [];-> this is not the correct method
//we will do the lenth of numbers = 0;

// numbers.length = 0;

// console.log(numbers);
// console.log(numbers2);

//second method
// numbers.slice(0, numbers.length);

// console.log(numbers);
// console.log(numbers2);

/**Comnbining and slicing */
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);


// let sliced = combined.slice(2,4);
// console.log(sliced); 


// let example2 = [10,20,30,40,50,60,70,80];
// console.log(example2.slice(2,6));


/** Spread Operator*/
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,...second];
// console.log(combined);

// let combined2 = [...first,'a', true, false,...second];
// console.log(combined2); 

// //kopy kaise create kare
// let combined = [...first,...second];
// let another =[...combined];
// console.log(combined);

/**Array iterating */
// let arr = [10, 20, 30, 40, 50];
// for(let value of arr){
//     console.log(value);
// }

//for each loop for the arr
// let number =  arr.forEach(function(number){
//     console.log(number);
// });

// console.log(number);

//this in the arrow function
// arr.forEach(number=>console.log(number));

/**Joining of an array */
// let number = [10, 20, 30 ,40, 50];
// const joined = number.join(',');
// console.log(joined);

/**Split Method */
// let message = 'This is my first message';
// let parts = message.split(' ');
// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);

/**Sorting the array */
// let number = [5, 10, 4, 40];
// number.sort();
// console.log(number);

// number.reverse();
// console.log(number);

/**Filter methid */
// let number = [1,2, -1, -4];
// //filter for the positive number
// let num = number.filter(function(number){
//     return number>=0;
// }); 

// //int the arrow function form
// let num2 = number.filter(number => number>=0);
// console.log(num);
// console.log(num2);

/**Mapping Array */
// let number = [7, 8, 9, 10];
// let items =  number.map(function(value){
//     return 'student_no ' + value;
// })

// //converting above function in the arrow function
// let item = number.map(value => 'student_no ' + value);
// console.log(item);
// console.log(items);

/**Object Mapping */
let number = [1,2,-6,-9];
let filtered = number.filter(value=>value>=0);
console.log(filtered);

let items = filtered.map(function(num){
    return {value : num};
})
// its arrow function creation
let item = filtered.map(val => {value:  val});

//chainig 
let items2 = number
            .filter(val=>val>=0)
            .map(num=> {value:num});
console.log(item);
console.log(items);
console.log(items2);
