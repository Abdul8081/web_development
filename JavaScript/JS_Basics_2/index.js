// console.log('Chaliye suru karte hai');
// //obkect creation


// let rectangle = {
//     length: 1,
//     breath: 2,

//     draw: function() {
//         console.log ('drawing rectangle');
//     }
// };

// // rectangle.draw();

// // console.log(rectangle.length);


// //lets create new object


// //factory function
// function createRectangle(len,bre){
//     return rectangle = {
//         // length: length,
//         // breath: breath,
//         //or
//         length:len,
//         breath:bre,
    
//         // draw: function() {
//         //     console.log('drawing rectangle');
//         // }
//         draw() {
//             console.log('Drawing rectangle');
//         }
//     };
// }

// let rectangleObj1 = createRectangle(5, 4);
// let rectangleObj2 = createRectangle(3, 7);


// console.log(rectangleObj1.length);
// console.log(rectangleObj1.breath);

// console.log(rectangleObj2.length);
// console.log(rectangleObj2.breath);

//constructor function 
// function Rectangle(len, bre) {
//     this.length = len;
//     this.breath = bre;
//     this.draw = function(){
//         console.log('Drawing rectangle');
//     }
// }

 

//object creation using constructor
// let rectangleObj = new Rectangle(4,6);
// console.log(rectangleObj);

//dynamic nature of the object
//her with the help of the object itself we can add the properties in the main class
// rectangleObj.color = 'yellow';
//if we want to remove than we can remove also the property from the object
// console.log(rectangleObj);

// delete rectangleObj.length;
// console.log(rectangleOb


//Priitive vs reference 
// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);
 

//reference
// let a = {value : 10};
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

//exmple function
// let a = 10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);
// out put will be the 10, as
// it is coppied, pass by value

//example refernce
// let a = {value : 10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a);
//here value of the a =11,
// incerement as it is passed by reference


/*For in Loop */
// let rectangle = {
//     length:2,
//     breath:4
// };
//for-in-loop
// for(let key in rectangle){
    // //keys are reft]lected through key variable
    // //values are reflected through rectangle[bracket]
    // console.log(key, rectangle[key]);
// }

/*For -off loop */
// let rectangle = {
//     length:2,
//     breath:4
// };
//for applying on the for loop for the key only
// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }
// //for applying on the for loop values
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

/* if color is present in the object */
// let rectangle = {
//     length:2,
//     breath:4
// };
// if('bua' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }

 /*Objext cloning using iteration*/
//  let src = {
//     a:10,
//     b:20,
//     c:30
//  };
//  let dest = {};
//  for(let key in src){
//     dest[key] = src[key];
//  }
//  console.log(dest);
//  src.a++;

/*Object clining using assign */
// let src = {
//     a:10,
//     b:20,
//     c:30
// };
// let dest = Object.assign({}, src);
// console.log(dest);
// src.a++;
// console.log(dest);

// let src2 = {value:25};
// let dest = Object.assign({}, src, src2);
// console.log(dest);


/*Object Cloning using spread*/
let src = {
    a:10,
    b:20,
    c:30
};
let dest = {...src};
console.log(dest);
src.a++;
console.log(...src);
