
const countValue = document.querySelector('#counter');

const increment = () =>{
    //get the value from UI
    let value = parseInt (countValue.innerText);
    //update the value
    value = value + 1;
    //set the value on to UI
    countValue.innerText = value;

};

// both way of the writing the function is correct
function decrement(){
    let value = parseInt (countValue.innerText);
    //update the value
    value = value - 1;
    //set the value on to UI
    countValue.innerText = value;
};