// console.log("hello aryan");
// let name="aryan";
// console.log(name);
// let userName; not intialised so undefined
// console.log(userName) //undefined
// alert("hello"); this alert syntax  is not defined in node (part of browser ..)

//difference between undefined and null

//null is standalone value  means intensional absence of an object
//Number , Bigint  console.log(Number.MAX_VALUE)

// Number uses 64 bits IEEE notation

//Symbol : it is used to add unique property key(study about it)

// console.log(typeof(undefined))// undefined
// console.log(typeof(null));  //object

// console.log(typeof NaN); //number 0/0, NaN +1 =NaN...
// console.log(0 / 0);   NaN

//your code should be : scalable readable , maintainable and resuasable  <><><><><><><><><>

// Datatypes are two types: primitive and non-primitive
//primitive : 7 types number, string .....    // pass by value contains single value store in stack memory
//non-primitive : arrays , objects , function .... contains multiple value stored in heap memory

//javascript is dynamically types language unlike java which is statically typed
//typeof(function)  return a funcition object

//Date Object (study in detail)

// let newDate=new Date();
// console.log(newDate);
// console.log(newDate.toString())

// let createDate=new Date(2023, 2,25);
// console.log(createDate.toLocaleString());
// let dateNow=Date.now();  //time in milisecond from 1970 till now ...
// console.log(dateNow);

// let arr=["aryan","shrey","anushka"];
// let number=[1,2,3,4,5,[23,45]];
// let newArr=[...arr,...number]; 

//spread operator(deep copy (but not for the nested array) )
// console.log(newArr);
// let newArr1=arr.concat(number);  // another method to add two arrays
// console.log(newArr1);

// let str1 = "aryan";// primitive datatype
// let str2 = new String("aryan"); // Object
// console.log(str1 == str2); true // converted into the same datatype and then compared
// console.log(str1 === str2); false  // strict comparison(primitive and non primitive)

// let nu = -34;
// console.log(nu == true); // false  //truthy and falsy value ..
// all the non-zero numbers are truthy but that does not mean they are equal to true

//during the loose comparison the value of true is converted into the 1 and false to 0 .

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
// const arr = [1, 2, 3, 4, 5];
// for (const element of arr) {
//     console.log(element);
// }
// console.log(arr);
// console.log(arr.join("")); //returns a string by joining all the elements of the array

// console.log("aryan ","gupta"); // , this is used to seperate the arguments
// console.log("aryan" + " gupta");// '+' operator is used to concat the strings

//two ways to iterate over the objects

// const student = {
//   name: "aryan",
//   age: 23,
//   college_name: "GCET",
// };

//let arr=[34,54,654,4342,123,34]; // can be iterated using for of , for each loop , for in loop (special)

//console.log(Object.keys(student)); // returns an array of keys

// for (const key in student) {
//   console.log(key + " : " + student[key]);
// }
// Object.keys(student).forEach((key)=>{
//     console.log(key,  student.key);       // printing student.key = prints undefined(because it seraches for the key property)  so use student[key]
// })

// let map1=new Map();
// map1.set(1,"aryan");
// map1.set(2,"shrey");

// map1.set(3,"naman");

// map1.set(4,"aniket");
// for(const [key] of map1){
//     console.log(key);
// }

// const coding = ["java", "python", "c", "c++", "Golang"];
// coding.forEach((item, index, array) => {
//   console.log(item, index, array);
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

// let array = [
//   {
//     number: 1,
//     genre: "fiction",
//     published: 1990,
//   },
//   {
//     number: 2,
//     genre: "non-fiction",
//     published: 1990,
//   },
//   {
//     number: 1,
//     genre: "science",
//     published: 1990,
//   },
//   {
//     number: 1,
//     genre: "history",
//     published: 1990,
//   },
//   {
//     number: 1,
//     genre: "science",
//     published: 1990,
//   },
//   {
//     number: 1,
//     genre: "history",
//     published: 1995,
//   },
// ];
// let historyBooks = array.filter((item) => {
//   return item.genre === "history";
// });
// console.log(historyBooks);
// historyBooks.forEach((item) => {
//   console.log(item.published);
// });

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
// let newArr=arr.reduce((acc,curr)=>{ // acc should be the first parameter 
//    return acc+curr;
// },initial) //here 0 represent the starting value of the acc; // bydefault refers to the first element of array

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
// console.log(NaN===NaN); //false (NaN is only value which is not equal to itself )

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
// },1000)

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

// const arr = [1, 2, 3];
// arr = [12]; // cannot reassign since it is declared with const 
// console.log(arr);  error

// arr[4]=90;
// arr[0]=67; //arr is const but we can change the value of the arr (Why  ?) because value can be change but reference cannot be changed
// console.log(arr.length);
// console.log(arr[3]);  //value at index 3 is undefined so prints undefined
// console.log(arr);

// const str="aryan";
// console.log(str);
// str="gupta"  //reference is changed to it will generate the error
// console.log(str);

// let a=90;
// let b=45;
// let c=12;
// const[d,e,f]=[90,45,"aryans"]  //this concept is called destructuring .....(interview )
// study about the destructuring of array and object in detail.
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

// console.log(abcd); //error  cannot access before initialisation
// let  abcd;

//events ........................................

// document.getElementById('image').onclick=function(){
//     alert("image is clicked");  ... not considers as best appraoch as this provide very less features
// }

// so we use addEventListner()

// document.querySelector('#image').addEventListener(('pointerover'),(event)=>{
// alert("image is clicked by someone");

// })

//attachEvent is used earlier...

//study about the eventPropagation -1. bubblng (default (false)) bottom to top event occur2.capturing (top to bottom event occur (true))

// to remove the element
// let image=document.querySelector('.image-class')
// image.addEventListener(('click'),(event)=>{
//  event.target.remove()
//  console.log(event.target.tagName)
// })

// let arr = [1, 2, 3];
//  delete arr[1];
// console.log(arr[1]);  // it makes it undefined a leaves a hole in the array

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

// let user = {
//   name: "aryan",
//   age: 67,
//   0: "gupta",
// };

// console.log(user["name"]);
// console.log(user["0"]);
// console.log(user.0)// worng : . operator can only be used with the string value not nummeric value but [] can be used with any of the type.......

// also object keys are 

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
// console.log(user.name===undefined);// another way to check if the key is present in the object or not (but it does not work sometimes )

// objects are ordered for non-numeric key .. if numeric then in ascending order

//array , date , error are an object in javascript  Data and error are class ....

// let user1={};
// let user2=user1  // here we have copied the reference ..... changes in user1 will be reflected in the user2 also
 
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
//     console.log("localStorage is defined" + " " + Storage)
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
// let newArr=structuredClone(arr); // deep copy
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

// ctrl+c again ctrl+b to create the copy of the file in the file manager

// class PrintName{

// }

// console.log(typeof PrintName)// function

// variable declared using var keyowrd are attached to the window object

//console.log() alternative is console.table() .. to get the data in the table format..

// console.log(x)// cannot access before initialisation
// var x=20; //only declaration is hoisted not initialisation

// let a=10;
// {
//     console.log(a);  // cannot access a before initialisation(reference error...)
//     let a = 90;
// }

//console.log(+true);// '+' opeartor before anydata converts that data into the number ..

// some and every method...
// let arr=[1,2,3,4,5,6];
// let result = (arr.some((ele)=>{
//    return ele%2===0;
// }))
// console.log(result);

// let result=arr.every((item)=>{
//     return item%2===0;
// })

// console.log(result);

// function name(){

// }
// console.log(name())// undefined...

// console.log(name);

// {
//     var name="aryan"; // in js declaration are moved to top of their scope....
//     // variable declaration is hoisted but not its initialisation....
// }

//creating  function for calculating the power

//sum of all the elements in the array...
// let arr=[2,5,6,8,9];
// function sum(arr,n){
//     if(n<=0)return 0;

//     return sum(arr,n-1) +arr[n-1];
// }

// const n=arr.length;

// const result=sum(arr,n);
// console.log(result);

//closures(whenever a function is executing a lexical environment is created and after the execution it is garbage collected..);
// function x(){
//     let a=90;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// const closure=x(); //closure will always remember its lexical environment
// closure()
// const box=document.querySelector('.box');// if container with  id box does not exist then it return null;

//creating map funciton  polyfils

// function getSquared(number){
//     return number**2;
// }

// let arr = [1,2,3,4,5];

// Array.prototype.myMap = function(callback){
//     let tempArr=[];
//     for(let i=0; i<this.length; i++){
//         tempArr.push(callback(this[i]))
//     }
//     return tempArr;
// }
// const squaredNumber = arr.myMap(getSquared);

// console.log(squaredNumber)

// console.log(typeof []);//object

//polyfils for reduce

// let aryanruns={
//     name:"aryan",
//     total:0
// }

// let otherruns=aryanruns;// pass by the reference
// otherruns.total=90;

// console.log(otherruns); // total would be: 90

// console.log(aryanruns); // total : 90 (since otherruns refernce to the aryanruns)

// function deepCopy(student){
//     // return JSON.parse(JSON.stringify(student));  method-1
//  }

// const student={
//     name:"aryan",
//     age:23,
//     branch:"cse",
//     Address:{
//         city:"barhaj",
//         pinCode:23423
//     }
// }
// const deepStudent= deepCopy(student);
// deepStudent.age=123;
// console.log(student)
// console.log(deepStudent);

// const student2={...student};

// student2.age=34; // deep copy( chnages are not reflected in the original array);
// student2.Address.pinCode=111111 // nested objects are referenced when use spread operator
// console.log(student)
// console.log(student2)

// (function(){
//     console.log("self invoked function")

// })();

// const student1={
//      branch: "CSE",
//      name:function(){
//     console.log(this) // refer to the student1 object
//    function anotherName(){
//     console.log(this.branch); // refer to the global object i.e window and prints undefined
//    }
//    anotherName();
// }
// }
// student1.name();

// write a code to reverse a string

// function reverseString(str){

//  or split -> reverse() -> join  ..... to get the reversed string

//     let reverseStr="";
//      for(let i=str.length-1; i>=0; i--){
//         reverseStr+=str[i];
//      }
//      return reverseStr;
// }

// let newString=reverseString("aryan");
// console.log(newString);

// function Printname(x, name="aryan"){
//     console.log(name);
//     console.log(x);
// }

// Printname(23);

// const arr = [[1,2,3] , [[1,2,] , [3,5]] , 12 , 45 , 23];
// console.log(arr.flat(Infinity)) // infinite level of flattening....

// finding the frequency of elements in the array

// const arr = [1, 2, 3, 4, 2, 7, 8, 4, 5, 1, 4];

// let obj = {};

// for(let ele of arr){
//     obj[ele] = (obj[ele] || 0) +1;
// }

// //another method
// const frequency = arr.reduce((acc, num) => {
//     acc[num] = (acc[num] || 0) + 1;
//     return acc;
// }, {});

// console.log(frequency);

// quest : sort the given sentence in ascending order of thier length ....

// let str = "gfg is comp science learning platform";
// let arr = str.split(" ");

// function swap(arr, index1, index2) {
//     let temp = arr[index2];
//     arr[index2] = arr[index1];
//     arr[index1] = temp;
// }

// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j].length > arr[j + 1].length) {
//             swap(arr, j, j + 1);
//         }
//     }
// }
// console.log(arr)
// console.log(arr.join(" "));

// method -2 ...

// arr.sort((a,b)=>{               ...  using builtin method .......
//     return a.length-b.length;
// })
// console.log(arr)

//  let str = "gfg is comp science learning platform";
//  let arr= str.split(" ");

//  for(let i = 0; i<arr.length; i++){
//    arr[i]=  arr[i].split('').reverse().join('');
//  }

// console.log(arr)

// "use strict"

//  age=90;
// console.log(age);
// // let age=34;
//
//   // age is in the temproal dead zone (it will not print the variable age , it will search for the age with decalaration which is in temporal  dead zone , hence cause reference error , cannot access age before initailisation )

// Myfun();
// var Myfun = function(){
//     console.log("first");
// }
// Myfun()
// function Myfun()
// {
//     console.log("second");
// }

// Myfun();

//  var variable = 10;
//  (()=>{
//     console.log(variable)
//     variable=20;
//     console.log(variable)
//  })() // iife

//  console.log(variable)
//  var variable=30;

// for(var i=0; i<10; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },0)
// }

// for(let i=0; i<10; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },0)
// }

// let name="aryan";

// const obj={
//     name:"aryan",
//     printName:()=>{
//         return this.name;
//     }
// }
// console.log(obj.printName())

//Object oriented programming.......

// function which return the object is called the factory methods
// function createUser(firstname , lastname , age){
//     return {
//         firstname,
//         lastname,
//         age,
//         getBirthYear(){
//             return new Date().getFullYear()-this.age
//         }
//     }
// }

// class createUser {   // type of class is a function
//     #age
//    constructor(firstname, lastname, age){
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.#age=age
//    }

//     getBirthYear(){
//     return new Date().getFullYear() - this.#age;
//    }

//     getFullName(){
//         return this.firstname +" " + this.lastname;
//     }
// }

// let user1 = new createUser("Aryan", "Gupta", 23)

// console.log("hii");
// setTimeout(()=>{
//      console.log("wait for the 4 sec");
// },0)
// console.log("end")

// let data = [
//      {
//           name:"aryan",
//           age:23
//      },
//      {
//           name:"Aniket",
//           age:21
//      },
//      {
//           name:"Anushka",
//           age:20
//      },
//      {
//           name:"arundhati",
//           age:27
//      }
// ]

// let internetSpeed =Math.floor(Math.random()*10) +1;
// console.log(internetSpeed);

// let promise = new Promise((resolve, reject)=>{
//      if(internetSpeed>4){
//           resolve(data);
//      }
//      else{
//           let error=new Error("something went wrong");
//           reject(error)
//      }
// })

// promise
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//      console.log(data)
// })

// .catch((error)=>{
//      console.log(error)
// })

// let b ;
// let a=b||23
// console.log(a) // 23 will be printed as a is undefined .....

// let a=true;
// console.log(a && "aryan") // return value of true or false like here aryan

// creating the multiple promises ...

// let promise1 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("promise1 is resolved")
//     },1000)
// })
// let promise2 = new Promise((_,rejected)=>{
//     setTimeout(()=>{
//         rejected("promise2 is rejected")
//     },2000)
// })
// let promise3 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("promise3 is resolved")
//     },3000)
// })

// promise1.then((response)=>console.log(response))
// promise2.then((response)=>console.log(response))
// promise3.then((response)=>console.log(response))

// let promise = Promise.all([promise1 , promise2 , promise3])
// promise.then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// async function showData() {
//     let promise= new Promise((resolve,reject)=>{
//         setTimeout(()=>{

//             resolve("promise resolved")
//         },3000)
//     })
//     let result = await promise;
//     console.log(result)
//     console.log("task is completed")

// }

// showData()
