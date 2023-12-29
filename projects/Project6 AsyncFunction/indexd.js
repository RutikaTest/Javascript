const changeText=setTimeout(function(){
 console.log("hii");
},3000);

let buttonElement=document.createElement('button');
buttonElement.addEventListner('click',function(){
    clearTimeout(changeText);
})

clearTimeout(changeText);  //for perticulartime

const changeTextTime=setInterval(function(){
 console.log("hii");
},3000);

clearInterval(changeTextTime);
