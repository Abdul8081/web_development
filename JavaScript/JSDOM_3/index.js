

//adding 100 para
// const t1 = performance.now();
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("task took "+(t2 - t1) + " ms");


 
//optimising a bit
// const t3 = performance.now();
// let myDiv = document.createElement('p');
// for(let i=1;i<=100;i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is Para : ' + i;

//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("task took "+(t4 - t3) + " ms");



/**code usong fragment */
// let fragment = document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//     let element = docume nt.createElement('p');
//     element.textContent = 'This is Para : ' + i;

//     fragment.appendChild(element);
// }
// document.body.appendChild(fragment);
// only one time is 'repainting' and also one time is the 'reflow' is happening




/**Single thredeing */

// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = 'This is the para content "';
//     document.body.appendChild(para);
// } 

// function appendMessage(){
//     let para = document.createElement('p');
//     para.textContent = 'Hello ji kya hal chal';
    
//     document.body.appendChild(para);
// }

// addPara();
// appendMessage();

// document.addEventListener('click', function(){
//     console.log("hello Abddul");
// });




/*If this code will be copy to the console, then the code fucntion will be executed after the specified time*/
// setTimeout(function(){
//     console.log('hello everyone');
//  }, 3000);