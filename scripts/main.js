// console.log("hello world")

// let myVariable=document.querySelector('hq');

// let iceCream = "chdocolate";
// if (iceCream=="chocolate"){
//     console.log("yay this is choclate")
// }
// else {
//     console.log("oh Damn")
// }

// function multiply(x,y){
//     let result=x*y;
//     console.log(result);
// }

// multiply(10,56)

// document.querySelector('html').onclick=function(){
//     alert("You are doomed");
// }


let myImage= document.querySelector('img');
myImage.onclick=function(){
    let mysrc = myImage.getAttribute('src');
    if(mysrc==='images/world.jpg'){
        myImage.setAttribute('src',"https://www.google.com/imgres?imgurl=https%3A%2F%2Fc402277.ssl.cf1.rackcdn.com%2Fphotos%2F18315%2Fimages%2Fhero_small%2FMedium_WW230176.jpg%3F1576168323&imgrefurl=https%3A%2F%2Fwww.worldwildlife.org%2Fspecies%2Fgiant-panda&tbnid=jsnm4ikO26qbjM&vet=12ahUKEwihsJS9lKHxAhVJE6wKHSTxBs0QMygAegUIARDNAQ..i&docid=O70dXiY5jKONeM&w=640&h=480&itg=1&q=panda&ved=2ahUKEwihsJS9lKHxAhVJE6wKHSTxBs0QMygAegUIARDNAQ")
    }
    else{
        myImage.setAttribute('src','images/world.jpg');
    }
}


let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
function setUsername(){
    let myName=prompt('enter the name');
    localStorage.setItem('name',myName);
    myHeading.textContent='This is javascript learning Hi'+ myName;
}