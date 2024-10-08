
let buttons = document.querySelectorAll(".button");
let inputField = document.querySelector(".input");

let string="";
let arr=Array.from(buttons);
// console.log(arr);
arr.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            inputField.value=string;
        }
        else if(e.target.innerHTML == 'AC'){
            string="";
            inputField.value=string;
        }
        else{
            string=string+e.target.innerHTML;
            inputField.value=string;
        }
    })
})

// inputField.addEventListener('click',()=>{
//     inputField.style.color="black";
    
// })




  
