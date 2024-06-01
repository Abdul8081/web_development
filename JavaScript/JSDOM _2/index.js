
// event listner
// document.addEventListener('click', FunctionName);

// //second way
// function FunctionName(){
//     console.log("I have clicked on the website");
// }


/**Wrong way of doing this */
//isse remove nhi hoga->kyoki dono function at the memory level same nahi hai
// document.addEventListener('click', function print() {
//     console.log("Hey I am printing something");
// });


// document.removeEventListener('click',function print() {
//     console.log("Hey I am printing something");
// });

// /**REmove event listner */
// function print() {
//     console.log("Hey I am printing something");
// }
// document.addEventListener('click', print);


// document.removeEventListener('click',print);



// const content = document.querySelector('#wrapper');
// content.addEventListener('click', function(event) {
//     console.log(event);
// });

// let links = document.querySelectorAll('a');

// let links3 = links[2];
// links3.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log("Maja aaya");
// });



/**Adding to many event */
// let myDiv = document.createElement('div');

// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is the para' + i;

//     newElement.addEventListener('click', function(event) {
//         console.log("I have clicked on the para : ");
//     });
//     myDiv.append(newElement);
// }
// document.body.appendChild(myDiv);




/**Adding to many event : optimized */
// let myDiv = document.createElement('div');

// function paraFunctionStatus(event) {
//     console.log("I have clicked on the div : ");
// }

// myDiv.addEventListener('click', paraFunctionStatus);

// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p'); 
//     newElement.textContent = 'this is the para' + i;

    
//     myDiv.append(newElement);
// }
// document.body.appendChild(myDiv);





/**Use of the event target property */
// let myDiv = document.createElement('div');
// function paraFunctionStatus(event){
//     console.log(event.target.textContent);
// }

// myDiv.addEventListener('click', paraFunctionStatus);

// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is the para' + i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);



/**solution to the problem statement of the copy */
// let element = document.querySelector('#wrapper');

// element.addEventListener('click', function(event) {
//     console.log('span pr click kia hai ' + event.target.textContent);
// });
 


/**agar keval spans prr click karne prr show kare to uske liye code*/
let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN'){
        console.log('this has been clicked on the span class');
    }
});