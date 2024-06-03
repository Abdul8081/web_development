// console.log("abdul muid here\n");

/**tell the output  */
// A example the synchronuous code

// function sync() {
//     console.log('first');
// }
// sync();

// console.log('second');


  /**second example of the asynchronous*/ 
//   setTimeout(function() {
//     console.log('third');
//   }, 3000);
//   /**here above line of the code is the asynchrounour code *j/
//   function sync() {
//     console.log('first'); 
//   }
//   sync();
//   console.log('second');



/** Promisse*/
// let meraPromise = new Promise(function(resolve, reject){
//     // console.log('I am inside promise');
//     // resolve(1998);
//     setTimeout(function(){
//         console.log('I am inside promise');
//         // resolve(1 998);
//         reject(new Error('Bhai sahab error aaye hai'));
//     },3000);
// })







/**Parallel asynchrounous execution */
// let meraPromise1 = new Promise(function(resolve, reject){
//     // console.log('I am inside promise');
//     // resolve(1998);
//     setTimeout(function(){
//         console.log('I am inside promise1');
//         resolve(1998);
//     },5000);
// })

// let meraPromise2 = new Promise(function(resolve, reject){
//     // console.log('I am inside promise');
//     // resolve(1998);
//     setTimeout(function(){
//         console.log('I am inside promise2');
//         resolve(1998);
//     },3000);
// })
// console.log('pehla');
 


/**Promis methods furthure */
// let meraPromise2 = new Promise(function(resolve, reject){
    // console.log('I am inside promise');
    // resolve(1998);
//     setTimeout(function(){
//         console.log('I am inside promise2');
//         // resolve(1998);
//         reject(new Error('error has happened'));
//     },3000);
// });
//then section
// meraPromise2.then((value) => {console.log(value)});
// console.log('pehla');

//error section
// meraPromise2.catch((error) => {console.log('recieved an error')});

/**eik sat h handling both the then and the error section */
// meraPromise2.then(console.log(value)), (error) => {console.log('error has occured')};



/**Multiple promisses want to handle synchronously */
// let wadda1 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('setimeout1 started');
//     },2000);
//     resolve(true);
// })

// let output = wadda1.then(() =>{
//     let wadaa2 = new Promise(function(resolve, reject){
//         setTimeout(() =>{
//             console.log('setimeout2 is started'); 
//         },3000);
//         resolve("wadaa2 resolved");
//     })
//     return wadaa2;
    
// })
// output.then((value) => console.log(value));





/**Async function */
// actually it has been returned as the promisse
// async function abcd() {
//     return 7;
// }
// console.log(abcd());




/**Await function */
// async function utility() {
//   let DelhiMausam = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//       resolve("Delhi mebhut garmi hai");
//     }, 5000);
//   });
//   let hydMausam = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//       resolve("Hyderabad is Cool");
//     }, 6000);
//   });

//   let dM = await DelhiMausam;
//   let hM = await hydMausam;

//   return [dM, hM];
// }
// console.log(utility());





/**Api getting */
// async function utility() {
//   let content = await fetch ('https://jsonplaceholder.typicode.com/posts/1');
//   let output = await content.json();
//   console.log(output);
// }

// utility(); 





/**Post call using the fetch API */
// async function helper() {
//   let options = {
//     method: 'POST',
//     body:JSON.stringify({
//       title: 'Babbar',
//       Body: 'Tagdi Body',
//       userId: 1998,
//       weight:90,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     },
//   };
//   let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//   let response = content.json();
//   return response;
// }

// async function utility() {
//   let ans = helper();
//   console.log(ans);
// }
// utility();




/**Closure */
function abcd() {
  var name ='Abdul';
  function displayName(){
    console.log(name);
  } 
  displayName();
}
abcd();
