// console.log('hello jee this is the JS basics 4');
// run();


//funtion declaration
// function run(){
//     console.log('Running');
// }
//function callinf or invoking(calling of a function is known as the invoke)
// run();

//Nmaedfunction assignment
// let stand =  function walk(){
//     console.log('walking');
// };
// stand();

// let jump = stand;
// jump();

/**Anonymous Function assignment */
// let stand = function(){
//     console.log('Walking');
// };
// stand();


// function sum(a, b) {
//     return a+b;
// }
// console.log(sum(1,2));
// console.log(sum(1)); //-> it will give NaN
// console.log(sum()); //-> it will give NaN
// console.log(sum(1,2,3,4,5,6));//-> it will gove the sum = 3;
 
// function sum(a, b) {
//     console.log(arguments);
// }

// // let itm = sum(1,2);
// // console.log(itm);

// console.log(sum(1,2,3,4,5,6));


/**Arguments Sum (Dynamically maded for the sum of the n arguments)*/

// function sum() {
//     let total = 0;
//     for(let value of arguments){
//         total = total + value;
//     } 
//     return total;
// }

// let ans = sum(1,2,3,5,6,7);
// console.log(ans);

/**Rest operator (..) */
// function sum(...args){
//     console.log(args);
// }
// function sum(num,...args){
//     console.log(args);
// }
// function sum(num,...args ){
//     console.log(args);
// }
// let sm = sum(1, 2, 3, 4, 5);
// console.log(sm);

/*Default Pramaet in the function* */
// function interest(p,r=5,t=10){
//     return p*(r/100)*t;
// }
// console.log(interest(1000, ));



/**Gettera/Setter */
//getter -> value get
//setter -> set or update the value
// let person = {
//     fName : 'Love',
//     lName : 'Babbar',
//     //setter 
//     set fullName(value) {
//         if(typeof value!== String){
//             throw new Error('You have not sent a string');
//         }
//         let part = value.split(' ');
//         this.fName = part[0];
//         this.lName = part[1];
//     },
//     //getter
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     }
// };
// console.log(person);

// function fullName() {
//     return `${person.fName} ${person.lName}`;
//     //this is the read only 
// }
// console.log(fullName());

//no creation of the full getter and setter

// console.log(person.fullName); //->getter call ho raha hai
// person.fullName = 'Abdul Muid';

/**
 if here I am giving other data type other than a string at the place of the abdul muid, then it will give the error while executing the code, hence we will put this code in the try and catch block so that i can get any alert message
 */



/**Try catch */
// try{
//     person.fullName = true;
// }
// catch(e) {
//     alert(e);
// }
// console.log(person.fullName);




/**Scopes */
// {var a = 5;
//     console.log(a);
// }
// console.log(a);

//var scaope
// function walk() {
//     var a = 5;
// }
// //yaha prr a value print nhi hoga, kyoki, yah defined hi hota hai only inside the  function
// console.log(a);




/**for loop escope answer */
// for(var i=0;i<10;i++){

// }
// console.log(i);

// if(true){
//     var a = 5
// }
// console.log(a);

// const a = 10;
// function ah() {
//     const b = 5;
// }





/**Reducing array */
let arr = [1,2,3,4];
// let total = 0;
// for(let value of arr){
//     total += value;
// }
// console.log(total);


//reduce the array to the sum
let totalSum =  arr.reduce((accumulator, currentValue) => accumulator + currentValue,0);
console.log('Printing Total Sum:');
console.log(totalSum);

//wha prr 0 hata bhe de tabhhi bhi answer aa raha hai -> correct

//is case me, accumulator start from first value;
//and currentvalue is starting form the second value 

