// console.log("hello aryan");
// let name="aryan";
// console.log(name);
// let userName; not intialised so undefined
// console.log(userName) //undefined
// alert("hello"); this alert syntax  is not defined in node 
//difference between undefined and null

//null is standalone value  means intensional absence of an object 
//Number , Bigint

//Symbol : it is used to add unique property key(study about it)


// console.log(typeof(undefined))// undefined
// console.log(typeof(null));  //object




// console.log(typeof NaN); //number 0/0, NaN +1 =NaN...

//your code should be : scalable readable , maintainable and resuasable  <><><><><><><><><>


// Datatypes are two types: primitive and non-primitive 
//primitive : 7 types number, string .....    // pass by value contains single value
//non-primitive : arrays , objects , function 

//javascript is dynamically types language unlike java which is statically typed 
//typeof(function)  return a funcition object


//Date (study in detail)

// let newDate=new Date();
// console.log(newDate);
// console.log(newDate.toString())

// let createDate=new Date(2023, 2,25);
// console.log(createDate.toLocaleString());
// let dateNow=Date.now();  //time in milisecond from 1970 till now ...
// console.log(dateNow);


// let arr=["aryan","shrey","anushka"];
// let number=[1,2,3,4,5];
// let newArr=[...arr,...number];    //spread operator
// console.log(newArr);
// let newArr1=arr.concat(number);  // another method to add two arrays 
// console.log(newArr1);


// let str1="aryan";
// let str2=new String("aryan");
// console.log(str1==str2);// converted into the same datatype and then compared 
// console.log(str1===str2);// strict comparison


// let nu=-34;
// console.log(nu==true) //truthy and falsy value ..

// let arr=[1,2,3,4];
// console.log(arr.length);

//calculating the length of the object 
// let obj={
//     name:"aryan",
//     age:34,
//     height:6
// }
// console.log(Object.keys(obj).length); // Object.keys(obj) return array..


//higher order loop
// 1. for Of loop..............
// const arr=[1,2,3,4,5];
// for (const element of arr) {
//     console.log(element);
// }
// console.log(arr);
// console.log(arr.join(',')); //returns a string by joining all the elements of the array 





// console.log("aryan ","gupta"); // , this is used to seperate the arguments
// console.log("aryan" + " gupta");// '+' operator is used to concat the strings 


//two ways to iterate over the objects

// const student={
//     name:"aryan",
//     age:23,
//     college_name:"GCET"
// }

//let arr=[34,54,654,4342,123,34]; // can be iterated using for of , for each loop , for in loop (special)

//console.log(Object.keys(student)); // returns an array of keys

// for(const key in student){
//     console.log(key);
// }
// Object.keys(student).forEach((key)=>{
//     console.log(key,  student.key);       // printing student.key = prints undefined  so use student[key]
// })


// let map1=new Map();
// map1.set(1,"aryan");
// map1.set(2,"shrey");

// map1.set(3,"naman");

// map1.set(4,"aniket");
// for(const [key] of map1){
//     console.log(key);
// }




// const  coding =["java", "python","c","c++", "Golang"];
// coding.forEach((item ,index, array)=>{
//     console.log(item,index,array);
// });


// const  coding =["java", "python","c","c++", "Golang"];
// coding.forEach((item)=>{
//     console.log(item);
// })  for each loop does not return any value ....



// const num=[1,2,3,4,5,6,7,8,9];
// let ans=num.filter((item) => {
//   return item>=4;
// })
// console.log(ans);


// let array=[{
//     number:1,
//     genre:"fiction",
//     published:1990
// },{
//     number:2,
//     genre:"non-fiction",
//     published:1990
// },{
//     number:1,
//     genre:"science",
//     published:1990
// },{
//     number:1,
//     genre:"history",
//     published:1990
// },{
//     number:1,
//     genre:"science",
//     published:1990
// },{
//     number:1,
//     genre:"history",
//     published:1995
// }]
// let historyBooks=array.filter((item)=>{
//     return item.genre==="history";
// })
// historyBooks.forEach((item)=>{
//     console.log(item.published);
// })

// let arr=[1,2,3,4,5,6];
// let aee=arr.filter((item)=>{  ...does not work ....
//     return item+10;
// })
// console.log(aee);


//chaining of the function(multiple function are joined together using . operator)

// let arr=[1,2,3,4,5,6];
// let newArr=arr.map((item)=>{
//  return item*3;
// }).filter((item)=>{
//     return item>8;
// })
// console.log(newArr);  //map and filter are chained together
// let initial=0;
// let arr=[1,2,3,4,5,6];
// let newArr=arr.reduce((acc,curr)=>{
//    return acc+curr;
// },0) //here 0 represent the starting value of the acc;

//console.log(newArr);  //used to design the shopping cart where all the bills are added at then last 



// const shoppingCart=[{
//     product:"trimmer",
//     price:1200
// },{
//     product:"bottle",
//     price:1000
// },{
//     product:"watch",
//     price:1900
// }];
// let totalBill=shoppingCart.reduce((acc,curr)=>{
//     return acc+curr.price;
// },0);
// console.log(totalBill);

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
// console.log("aryan gupta")


// node list and html collection in DOM is not  array but it is similar to array 

//innerHTML  .. whole content with tag   (study it for interview)
//innertext  .. text which is visible on the screen 
//textContent ..  shows all the content together with the hidden content


// study about the window and document objects .......(interview).....


// let parent=document.querySelector('.parent');
// let child=parent.children[0];
// // console.log(child)
// console.log(parent.children);//prints HTMLCollections
// for(let i=0; i<parent.children.length; i++){
//     console.log(parent.children[i].innerHTML)
// }
//  console.log(parent.firstElementChild.innerHTML);// access the first element of the parent 

//  console.log(parent.lastElementChild.innerHTML)
// console.log(child.parentElement);
// // let x=child.parentElement

// console.log(parent.childNodes);// print the childNodes

// let parentList=document.querySelector('.parent')
// let div=document.createElement('div');
// div.className="container"; OR div.classList.add('') .. className will replace all the existing classes and then add the class so use classList.add() another method is setAttribute('class', 'container');

// div.id=Math.round(Math.random()*10)+1;
// div.style.backgroundColor="green";
// div.innerHTML="chai aur code"; or <h1>hello everyone </h1>
// parentList.append (div);


//append can append multiple child at the same time including the text also 
//parent.append('child1','child2' ,"hello")  
//but appendChild('') can only append one child at a time ....


//nodeList and HTMLCollection are array like objects 
//to convert them in Array Array.from(nodeList or HTMLCollection)
//forEach loop can be applied on the nodeList but not on the HTMLCollections


//a simple todo application  // we can also store the data in the localStorage 

// let input = document.querySelector('#language'); 
// let btn = document.querySelector('.button');
// let ul = document.querySelector('.list');

// // Function to save items to localStorage
// function saveToLocalStorage() {
//  let items=[];
//  ul.querySelectorAll('li').forEach((li)=>{
//     items.push(li.firstChild.textContent);
//  })
//  localStorage.setItem('languages',JSON.stringify(items));
// }

// // Function to load items from localStorage
// function loadFromLocalStorage() {
//   const storedItems = JSON.parse(localStorage.getItem('languages')) || [];
//   ;
//   storedItems.forEach(item => addLanguage(item));
// }

// // Function to add language to the list and attach event listeners
// function addLanguage(language) {
//   let deletebtn = document.createElement('button');
//   let li = document.createElement('li');
//   deletebtn.innerText = "delete";
//   deletebtn.className = 'listbtn';
//   li.appendChild(document.createTextNode(language));
//   ul.appendChild(li);
//   li.appendChild(deletebtn);

//   deletebtn.addEventListener('click', () => {
//     li.remove(); // Remove the entire list item
//     saveToLocalStorage(); // Update localStorage
//   });
// }

// // Event listener for adding a new language
// btn.addEventListener('click', () => {
//   if (input.value.trim() !== "") {
//     addLanguage(input.value.trim());
//     saveToLocalStorage(); // Save to localStorage
//     input.value = ""; // Clear the input field
//   }
// });

// // Load the saved data when the page loads
// document.addEventListener('DOMContentLoaded',()=>{
//     loadFromLocalStorage();
// });



//selection the particular li item in the given unordered list
// let li2=document.querySelector("ul:nth-child(2)");  //selecting the nth child in the ul



//taking the input form the user and storing the data in the local storage 


// let input=document.querySelector('.text');
// input.addEventListener(('input'),(event)=>{
//     // console.log(event.target.value)
//     localStorage.name=event.target.value;
// })
// localStorage.clear() to clear the storage


//  Study about the localStorage , sessionStorage , and cookies (Interview Question)...
// It is not preferred to use eventListner inside a loop because eventlistner acts asynchronously and while loop acts synchronously .. (read more about it).....


//guessing the right number game



// Guessing the number game/////,,,,,,,,,,,,,,,,,,,,,,,,...................
// let input = document.querySelector('.input');
// let btn = document.querySelector('button'); // Correct selector for button
// let outcome = document.querySelector('.outcome');
// let result = document.querySelector('.final-result');
// let guessRemain = document.querySelector('.remain-guess');
// let reset = document.querySelector('.reset');

// // Generate a random number between 1 and 100
// let randomNumber = Math.floor(Math.random() * 100) + 1;

// // Initialize remaining guesses
// let guessNo = 10;

// // Handle guess submission
// btn.addEventListener('click', () => {
//     let inputValue = Number(input.value); // Convert input value to number

//     if (!inputValue || inputValue < 1 || inputValue > 100) {
//         outcome.textContent = "Please enter a number between 1 and 100.";
//         return;
//     }

//     if (guessNo > 1) {
//         if (inputValue === randomNumber) {
//             outcome.textContent = "Correct! 🎉";
//             result.textContent = "Final Result: You Won!";
//             btn.disabled = true; // Disable the button
//         } else {
//             guessNo--;
//             guessRemain.textContent = `Guesses remaining: ${guessNo}`;
//             outcome.textContent = inputValue > randomNumber 
//                 ? "Too high! Try again." 
//                 : "Too low! Try again.";
//         }
//     } else {
//         guessRemain.textContent = "Guesses remaining: 0";
//         outcome.textContent = "You ran out of guesses!";
//         result.textContent = `Final Result: You Lost! The number was ${randomNumber}.`;
//         btn.disabled = true; // Disable the button
//     }

//     input.value = ""; // Clear input field
// });

// // Handle game reset
// reset.addEventListener('click', () => {
//     guessNo = 10;
//     randomNumber = Math.floor(Math.random() * 100) + 1; // Reset random number
//     guessRemain.textContent = `Guesses remaining: ${guessNo}`;
//     outcome.textContent = "Outcome of each guess:";
//     result.textContent = "Final Result:";
//     input.value = "";
//     btn.disabled = false; // Enable the button
// });



//...   OOPS concept is more important then collection framework  concept because(..interview question )...



//two ways of adding event to a tag ..... onlick within the html tag is not recommeded

// document.getElementById('image').onclick =(() => {
//     alert("this is an image");
// })

// document.querySelector('#image').addEventListener(('click'),()=>{
//     alert("this is an image");
// })



//syntax of addEventListener...Mostly used to add event 
// document.querySelector('#image').addEventListener((),function(){},  false/true) false is default .....
//we pass three paremeters to the eventlistner (interview why? )


//type , timestamp, defaultprevented, target, toElement, srcElement, currentTarget clientX , cilentY, altKey ,ctrlKey , shiftKey 


//study the concept of capturing and bubbling (interview ques:)




// console.log(typeof[1,2,3,-4]); // object
// console.log(NaN===NaN); //false


//Default behaviour of javascript is single threaded and synchronous nature
 


// let x=setTimeout(printName,2000);
// function printName(){
//     console.log("my name is aryan gupta");
// } 
// clearTimeout(x);


//study about the date object (Imp for the interview);


// let x=setInterval(sayDate,2000,"today date is :");
// function sayDate(str){
//     console.log(str , new Date().toLocaleString())
// }
// setTimeout(()=>{
//     clearInterval(x);
// }


//background color changing after every second .... project 
//In html attributes are not case sensitive


// let run=setTimeout(()=>{
//     let i=0
//     while(i<100000){
//         console.log("running")
//         i++;
//     }
    
// },0);

// setTimeout(()=>{
//     clearTimeout(run);
//     console.log("stopped")
// },2000);


// const arr=[1,2,3];  
// arr[4]=90;
// arr[0]=67; //arr is const but we can change the value of the arr (Why  ?) same reference
// console.log(arr.length);
// console.log(arr[3]);  //value at index 3 is undefined
// console.log(arr);


// const str="aryan";
// console.log(str);
// str="gupta"  //reference is changed to it will generate the error
// console.log(str);



// let a=90;
// let b=45; 
// let c=12;
// const[d,e,f]=[90,45,"aryans"]  //this concept is called destructuring .....(interview )
// console.log(a,b,c)
// console.log(d,e,f);


// function abc(){
//     console.log("aryan");
// }
 
// const name=new abc();
// console.log(name);
//study about the objects in details..


//javascript is single threded language


//what is lexical scope ?(interview)

// function outerFunction(){
//    // debugger  ..... used to debug the code
//     let name="aryan";
//     function innerFunction(){
//         console.log(name);
//     }
//     innerFunction();
// }

// outerFunction();



//how to block the main thread....\
//consider abcd is a variable which is not defined
// console.log(typeof(abcd));  .......undefined...........


// console.log(abcd); //error

// console.log(typeof abcd); //error
// let abcd;  

//events ........................................

// document.getElementById('image').onclick=function(){
//     alert("image is clicked");  ... not considers as best appraoch as this provide very less features 
// }


// so we use addEventListner()  

// document.querySelector('#image').addEventListener(('pointerover'),(event)=>{
// alert("image is clicked bu someone");


// })

//attachEvent is used earlier...

//study about the eventPropagation -1. bubblng (default (false)) bottom to top event occur2.capturing (top to bottom event occur (true))



// to remove the element
// let image=document.querySelector('.image-class')
// image.addEventListener(('click'),(event)=>{
//  event.target.remove()
//  console.log(event.target.tagName)
// })


// let x=prompt("which fruit you want to buy ?" , "apple"); //apple is bydefault value

//making the constructor for the object
// function userDetails(name,age){ // acts as a constructor.....
//     return {
//         name: name,
//         age: age,
//     }
// }

// let user1=userDetails("aryan",21);
// let user2=userDetails("aniket",23);
// console.log(user1);
// console.log(user2);


// let user={
//     name:"aryan",
//     age:67,
//     0:"gupta",
// }

// console.log(user["name"]);
// console.log(user[0])
// console.log(user.0)// worng : . operator can only be used with the string value not nummeric value but [] can be used with any of the type.......

// console.log(user)
// delete user.name;
// console.log(user);
// user.lastname="gupta";
// console.log(user);



//in operator in object

// let user={name:"aryan", age:34,isLogin: true};


// for(let key in user){  //for in loop to iterate over the object 
//     console.log(key, user[key]);
    
// }
// console.log("name" in user)
// console.log(user.name===undefined);// another way to check if the key is present in the object or not (but it doen not work sometimes )


// objects are ordered for non-numeric key .. if numeric then in ascending order 


//array , date , error are an object in javascript 

// let user1={};
// let user2=user1  // here we have copied th reference ..... changes in user1 will be reflected in the user2 also


// to prevent the referencing of objects we can do the cloning of object using for in loop


// let permission={canLogin:true};
// Object.assign(user,permission)  // to add objects to already exist objects 
// console.log(user.canLogin);


// function sayHello(){
//     console.log("hello my name is aryan gupta")
// }
// let someVar=sayHello; // here we are providing the reference of the function 
// someVar();   // function is executed


// to change the background color of the body every second....
// let body=document.querySelector('body');
// let start=document.querySelector('.start')
// let stop=document.querySelector('.stop');
// let x=null;

// start.addEventListener(('click'),function(){
//     changeBackgroundColor();
// })
// stop.addEventListener(('click'),function(){
//     stopBackgroundColor();
// })
// function changeBackgroundColor(){
//     let color="fff";
//     let hexCode='123456789abcdef';
   
    
//     x= setInterval(() => {
//         for(let i=0; i<6; i++){
//             let random=Math.floor(Math.random()*15);
//             color=color+hexCode[random];
//             }
//         body.style.backgroundColor=`#${color}`;
//         color=""
//     }, 1000);
// }
// function stopBackgroundColor(){
//   clearInterval(x);
// }


// imp note : setTimeOut, setTimeInterval are not the part  of the javascript they are the part of browser then make the javascript asynchronous in nature .....

// const user={
//     name:"aryan",
//     age:34,
//     sayHey(){
//         console.log("hey"); // shorhand notation of writing the function inside the object 
//     },
//     sayHello:function(params) {
//         console.log("hello");
//     }

// }

// console.log(user.sayHey(),   user.sayHello())
// user.sayHello=function(){
//     console.log("hello everyone my name is aryan gupta ");

// }
// console.log(user);
// user.sayHello();




//study about the this keyword (interview important);
//this keyword is not used with the arrow function .....



// let user={
//     arr:[1,2,3,4,5],
//     brr:["aryan","aniket"],
// }
// console.log(user)
// console.log(user.arr[4]);

//API  ...<><><><><><><><><<><><><><><><><>><><><<><><><><><><><><><><><>><>><><>>><><><<>>

// AJAX is used to send the api request earlier

//code revision 1 .




//typeof (function) is a function 
// type of class is also a function


//javascript and classes
// class user{
//     constructor(name){
//         this.name=name;
//     }
//     sayHello(){
//         console.log(`Good morning evryone my name is ${this.name} gupta`);
//     }

// }

// let u1=new user("aryan");
// u1.sayHello()



//hoisting in js......


//passing function as a parameter...

// function greeting(){
//     return "welcome to GFG";
// }
// function print(greet,name){
//     console.log(name, greet())
// }
// print(greeting,"aryan");


// function greetMessage(){
//     function wrapper(){
//         let name="aryan"
//         console.log(`hello ${name} welcome to gfg`)
        
//     }
//     return wrapper;
// }

// greetMessage()(); OR  const print=greetMessage()  print();


   

// HOF higher order function..........

// function greet(){
   
//     return  function(){
//         console.log("hello");
//     }
// }
// const call=greet();
// call();


//there is very minute difference between first class and higher order function



//object argument(  Array like object  ....)

// function printNumber(){
// console.log(arguments);
// const arr=[...arguments]; //converting the argument(array like object ) into array...
// console.log(arr);
// }

// printNumber(1,2,3,4);

//rest parameters

// function print(...rest){
//     let sum=0;
//     rest.forEach((ele)=>{
//         sum+=ele
//     })
// return sum;
// }

// const sum=print(1,2,3,4,5)//calculete the sum of all the numbers  .. n is unknown

// console.log(sum)



//scope chain

// let d=90;
// function outer(){
//    let a=9;
//    function inner(){
//     console.log(a);
//     console.log(d);
//    }
//    inner();
 
// }
// outer()


// console.log({d})// print in object form





// function print(){
//     console.log("this function can be used to  print something ")
// }

// function greet(){
//     console.log("namestey india");

//     return print; // als0
// }

// greet()(); // here first greet() function will be executed and then print will be executed
//another way
// const call=greet();
// call();


// function func(){
//    console.log(arguments)
//    const arr=[...arguments]// array like object
//    console.log(arr)
// }

// func(2,3,4,5,56);


// const object={
//     '0':34,
//     '1':45,
//     '3':12,
// }

// // const arr=[...object] (error)... spread operators are applied to  only those data structure which is iterable like array string , map  etc SO....
// const arr=[...Object.values(object)]  // converting an object into an array
// console.log(arr);

// console.log(Object.keys(object))




//Closure is very important concept in the js (it is a type of function which remembers its parent variable even after the execution of its parent function )

// function greet(){
//     let a=90;
//     function print(){
//         console.log(a);
//     }
//     return print;
// }

// const x=greet();
// x();// it will print the value of a even thought the greet() function has already executed in previous line 


// (function(){// immeidaitely invoked function when the page is loaded
//     console.log("hello my name is aryan gupta")
// })();


//Anonymous function -> a function without name like in call backs 
//function expression vs function declaration..........




//callbacks 

//first class function which is passed as a argument to another function is called as callback function  (anonymous function(without name))  asynchronous execution like setInterval, setTimeOut()  fetch .then(), addEventListner()  etc

// function greet(wrapper){
//     console.log("hello");
//     wrapper();
// }


//  greet(()=>{
//     console.log("now we are going to start the function ") //this is a callback function
//  });


// const arr=["aryan","anushka","aniket"];
// let string=arr.join(',')
// console.log(string)

// let str="my ,name ,is, aryan, gupta"
// let arrnew=str.split(',');
// console.log(arrnew)


//String in javascript is immutable , when we do concatenation to the previous string a new string is created and older string if not referenced in the future then it becomes for the garbage collection ........


//eleminate all the vowels form the string 
// let str='the quick brown fox jump over the lazy dog';

// let newStr="";
// let i=0;
// while(i<str.length){
//     if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
//         i++;
//     }
//     else{
//         newStr=newStr+str[i]
//         i++
//     }
// }
// console.log(newStr)

//this question can also be done using array and checking if the characters of string are contained in the array or not using .includes method

// let str="aaaaabbbbb";
// let newStr="";
// for(let i=0; i<str.length; i++){
//     let ascii=str.charCodeAt(i);
//     ascii+=2;
//     newStr=newStr+String.fromCharCode(ascii);
// }

// console.log(newStr);

// const arr=[1,2,3,4];
// const result=arr.reduce((acc,curr)=>{curr%2===0? acc[even]+=curr: acc[odd]+=curr},{"even":0,"odd":0})  //learn to use this .....

// every global object or variable is a part of window objcet
 //some examples are : console.log() , setTimeOut(),setInterval(), alert(), prompt() , confirm() ,,,//// etc....

//  window.console.log(window);

//date can be consider as a object and function both
// let date=new Date(); //consider  a object when defined with the new keyword
// console.log(Date()); //consider as function 

// let date=new Date();
// console.log(date.getHours());
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())

// console.log(date.getTime())
// console.log(date)

// let date=new Date();
// console.log(date.toUTCString());
// console.log(date.getTimezoneOffset()/60);
// console.log(date.getUTCDate())


// let date=new Date();
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString().toUpperCase());



//console.log("4">"23");// first converted to unicode value and then compared lexographically 





//polyfils

//for map function

// let arr=[1,2,3,4,5];

// Array.prototype.myMap=function(callback){
//     let tempArr=[];
//     for(let i=0; i<this.length; i++){
//         tempArr.push(callback(this[i]));
//     }
//     return tempArr;
// }

// const result=arr.myMap((num)=>num*2);
// console.log(result);



//polyfils for the filter
// const arr=[1,2,3,4,5];

// Array.prototype.myFilter=function(callback){
//     let tempArr=[];
//    for(let i=0; i<this.length; i++){
//     if(callback(this[i])){
//         tempArr.push(this[i]);
//     }
//    }
// return tempArr;
// }

// const result=arr.myFilter((num)=>num>2);
// console.log(result);



//polyfils for the reduse method 

// const arr=[1,2,3,4,5];

// Array.prototype.myReduce = function(callback, initialValue) {
//     if (typeof callback !== 'function') {
//         throw new TypeError(callback + ' is not a function');
//     }
    
//     if (!Array.isArray(this)) {
//         throw new TypeError('Object is not an array');
//     }

//     let accumulator = initialValue !== undefined ? initialValue : this[0];
//     let startIndex = initialValue !== undefined ? 0 : 1;

//     for (let i = startIndex; i < this.length; i++) {
//         accumulator = callback.call(undefined, accumulator, this[i], i, this);
//     }

//     return accumulator;
// };

// const result=arr.myReduce((acc,curr)=>acc+curr,0);
// console.log(result);



// console.log(this); //here this refer to the global object that is  window
// "use strict";

//call apply and bind method

//adding the functionality to the notes section in js and storing the data in the local storage

// let savebtn=document.querySelector('.save')

// let deletebtn=document.querySelector('.delete');
// let textarea=document.querySelector('#note')
// let container=document.querySelector('.container');
// let note=document.querySelector('.note')

// let addnote=document.querySelector('.add-note')
// addnote.addEventListener(('click'),function(){
//     addNoteSection();
// })
// function addNoteSection(){
// let note=document.createElement('div');
// note.className="note";
// note.innerHTML=`
//             <div class="toolbar">
//                 <span class="toolbar-title">Notes</span>
//                 <div class="icons">
//                     <div class="save"><i class="fa-solid fa-floppy-disk"></i></div>
//                     <div class="delete"><i class="fa-solid fa-trash"></i></div>
//                 </div>
//             </div>
//             <textarea name="notes" id="note" placeholder="Type your notes here..."></textarea>
//         `;

//         note.addEventListener(('click'),function(){
//             note.remove()        })
//         container.appendChild(note)

      
        
// }

//typeof (function) is a function 
// type of class is also a function


//javascript and classes
// class user{
//     constructor(name){
//         this.name=name;
//     }
//     sayHello(){
//         console.log(`Good morning evryone my name is ${this.name} gupta`);
//     }

// }

// let u1=new user("aryan");
// user.sayHello()
// function showMessage(){
//     alert("button is clicked")
// }


// let btn=document.querySelector('.add-note');
// btn.addEventListener('click',showMessage())

//callback hell or pyramid of doom
//inversion of contorl

//promises is object which has two states 1.pending 2. fulfilled(resolve, reject)

// let url='https://catfact.ninja/fact';
// let promise=fetch(url);
// console.log(promise);  //it will show pending because before waiting for the promise to fulfilled i have print the value of the promise; also by default a promise will always be pending 

// method chaining =>  adding multiple function together using . operator is called method chaining .....


// promise.then((response)=>{
//     return response.json() // this is returning a promise/Object 
//     .then((data)=>{
//   console.log(data.fact)
//     })
// }).catch((err)=>{
//     console.log(err)
// })
// let loggedIn=false;
// let student={
//   name:"aryan",
//   age:23
// }

// let promise1=new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//   if(loggedIn){
//     resolve(student);
//   }
//   else reject("user is not loggedIn")
//  })

// })
// promise1.then((response)=>{
//   return response
// })
// .then((data)=>{
//   console.log(data.name)
// })
// .catch((err)=>{
//   console.log(err)
// })


// let urls=[ 'https://api.github.com/users/prakashsakari',
//   'https://api.github.com/users/AshishJangra27'];

//   let promises=urls.map((url)=>fetch(url));
//   Promise.all(promises)
//   .then((response)=>{
//   response.forEach((response)=>{
//     console.log(`${response.url}  ${response.status}`)
//   })
//   })
//   .catch((err)=>{
//     console.log(err)
//   })

// Select the theme toggle button
// const themeToggleButton = document.getElementById('theme-toggle');

// // Add a click event listener to the button
// themeToggleButton.addEventListener('click', () => {
//   // Toggle the "dark-mode" class on the body element
//   document.body.classList.toggle('dark-mode');
//   document.querySelector('.nav1').classList.toggle(dark-mode)

//   // Save the current theme in localStorage
//   const isDarkMode = document.body.classList.contains('dark-mode');
//   localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
// });

// // Apply the saved theme on page load
// window.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme === 'dark') {
//     document.body.classList.add('dark-mode');    
//   }
// });
// import  { task } from './data1.js';
// // console.log(modules1);
// document.querySelector('button').addEventListener(('click'),task)


// const user={
//     name:"aryan",
//     student:{
//         name:"aniket",
//         age:34
//     }
// }
// // console.log(user.toString())

// const student={
//     printName:function(name){
//         console.log(`my name is ${name}`)
//     }
// }
// const person={
//     height:170,
//     __proto__:student // creating a prototype object 

// }
// person.printName("aryan")

// function user(name,age){ //constructor function
// this.name=name;
// this.age=age;
// }

// let user1=new user("aryan",23);  //creating user object 
// let user2=new user("aniket",23);

// let user3=new user("anushka",21);

// let user4=new user("annni",26);

// console.log(user3.name);


//creating a object of a class

// class User{
//     constructor(name, age, isAdmin, isLoggedIn){
//         this.name=name;
//         this.age=age;
//         this.isAdmin=isAdmin;
//         this.isLoggedIn=isLoggedIn;
//     }
// }

// let user1=new User("aryan",21,true,false);
// console.log(user1);



//quizify

// const database={
//     data:[
//         {
//             question:`let a={} and b={}
//             console.log(a==b)
//             console.log(a===b)`,
//             option:{
//                 a: 'false false',
//                 b: 'true true',
//                 c: 'false true',
//                 d: 'true false'
//             },
//             correctAnswer:'a'
//         },
//         {
//             question:`Object.assign(target,source) 
//             creates which type of copy`,
//             option:{
//                 a: 'deep copy',
//                 b: 'shallow copy',
//                 c: 'nested copy',
//                 d: 'creates a new reference'
//             },
//             correctAnswer:'b'
//         },
//         {
//             question:`Is method chaining possible with
//             for each`,
//             option:{
//                 a: 'true',
//                 b: 'false'
//             },
//             correctAnswer:'b'
//         }
        
//     ]
// }
// for(let i=0; i<database.data.length; i++){
//     console.log(`Question:${i+1} ${database.data[i].question}` )
//     for(let key in database.data[i].option){
//         console.log(`${key} : ${database.data[i].option[key]}`)
//     }
// }
// console.log("give the answer to the following questions :")
//  let count =0;
// setTimeout(()=>{
//     let ans1=prompt("answer 1 : option no.")
//     let ans2=prompt("answer 2: option no.")
//     let ans3=prompt("answer 3: option no.")

 
// alert("Wait for the 10 sec we are evaluating your answer");
    

//     setTimeout(()=>{
//       let  finalAns=[ans1, ans2, ans3];
//         for(let k=0; k<database.data.length; k++){
//             if(database.data[k].correctAnswer===finalAns[k]){
//                 alert(`answer ${1+k} is correct`)
//                 count++;
//             }
//             else{
//                 alert(`answer ${1+k} is false`)
//             }
//         }
//         console.log(`correct answer ${count}`)
// console.log(`wrong asnwer ${database.data.length-count}`);
//     },10000)


// },10000)


//polyfils ......

// creating a polyfills for the map function



//readline-sync is node.js package for taking input from the user 
// function object(name,age){
//     return{
//         name,
//         age,
//     }
// }
// const student=object("aryan",21);
// console.log(student);

// const student={
//     name:"aryan",
//     age:23,
//     address:{
//         city:"barhaj",
//         state:"uttar pradesh",
//     }
// }

// const student2=Object.assign({},student); only the nested objects are shallowed copy 
// const student2=student;  // complete shallow copy 
// const student2={...student}; // only the nested objects are shallowed copy
// const student2=JSON.parse(JSON.stringify(student));// complete deep copy is created 
// student2.name="aniket";
// student2.address.city="deoria";

// console.log(student.name)
// console.log(student2.name);

// console.log(student.address.city)
// console.log(student2.address.city);


//create a function that return a function that prints hello world 

// function printHelloWorld(){
//     return function(...args){
//         return "Hello World";
//     }
// }
// let x= printHelloWorld();
// console.log(x());


// let date1=new Date();
// console.log(date1.getDay());

// document.write("hello g kaise hai sare ke sare.");

// we can check if the input is number or not by using isNaN() opeartor .....

//nullish coalishing
//ternary opeartor
//readlinesync (user input)...


//anonymous function or function expression is not hoisted




// let arr=[5,3,2,12,67,23];
// let sorted=arr.sort((a,b)=>{ //arr.sort(callback function)...
//     return a-b;
// })
// //time complexity of the sort method depends on the browser like in chrome extension it is nlogn....
// console.log(sorted);
// console.log(arr.includes(12,4));

// let string="my name is aryan gupta";
// let newstr=string.split(" "); // two arguments can be passed (seperator,limit);
// console.log(newstr);

// // to reverse a string -- str.split('').reverse().join('');
// console.log(newstr.join(' '));

//object destructuring ...
// const student1={
//     name:"ayran",
//     age:23,
//     section:"computer science",
// }

// const{name , age}=student1;
// console.log(name);
// console.log(age);


// const arr=[1,2,3,4,5,6,7];
// const[a,b,...c]=arr;





// let arr=new Array(0);
// console.log(arr.length);

 

//localStorage (always store data in the form of string)
//console.log(localStorage.getItem("name"))//setItem,getItem,removeItem,clear()
//JOSN.stringify(), JSON.parse()

// if(typeof Storage!==undefined){
//     console.log("localStorage is defined")
// }
// else{
//     console.log("localStorage is not defined")
// }

// let arr=[{name:"aryan",age:23}];
// const newArr=[...arr];// does not create  a deep copy in the case of complex datatypes like object or array...
// //use JSON.parse(JSON.stringify(arr))
// newArr[0].name="anushka";
// console.log(arr)
// console.log(newArr);


//another method 
// let arr=[{name:"aryan",age:23}];
// let newArr=structuredClone(arr);
// newArr[0].name="anushka";
// newArr[0].age=34;
// console.log(newArr);
// console.log(arr);

//Lodash library can also be used to deepcopy of array 

// let arr=[12,3,4,5,6,7,3];
// // arr.splice(2,2,100,101);
// let newArr=arr.slice(1,3);
// console.log(arr);
// console.log(newArr);


//slice return a new array while splice make changes in the original array...

// const student={
//     name:"aryan",
//     age:23
// }


// const student={
//    studentno:[
//     {
//         name:"aryan",
//         age:23
//     },
//     {
//         name:"aniket",
//         age:21
//     }
//    ]
// }

// for(let [key,value] of Object.entries(student)){
//     console.log(key, value);
// }
// console.log(student +"\n")//\n for the nextline
// console.log("nextLine")



// kular and readlinesync are the two modules that are used here  kular is used for the color 

// const student={
//     Name:"aryan",
//     age:23,
//     getName(){
//         return this.Name
//     },
//     address:{
//         city:"Barhaj",
//         district:"Deoria"
//     }
// }

// console.log(student?.address?.firstname); // optional chaining ?. 
// console.log(student?.getName?.()); //optional chaining with function

// const{Name:studentname, address:{city:studentCity,district:studentDistrict}}=student;
// // console.log(studentCity)
// console.log(studentname)
// console.log(studentCity)
// console.log(studentDistrict)
// console.log('Name' in student) // in operator 

// //this in global context refer to the window object ..


//...............this keyword need to be study propery..................//


//includes search indexOf

// const str="hello i love to code in javascript";
// const substring=str.includes('love');
// console.log(substring);

// const student={
//     student1:{
//         name:"aryan",
//         age:23,
//         },
//     student2:{
//         name:"aniket",
//         age:21
//     }    
// }
// const student1Name="student1"; 
// console.log(student[student1Name].name)  bracket notation is used for the dynmaic property 



//  capturing and bubbling is not used at same time if used capturing is given more preference 

// console.log(name);


class PrintName{

}

console.log(typeof PrintName)



















