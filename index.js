// interview Qestions Practise :


// *****call,apply,bind
// var obj = {
//   name:"sanket",
//   lastname:"musale"

  
// }

// function all(a1,a2){

//   console.log(this.name,this.lastname,a1,a2)
// }

// all.call(obj,1,2)

// all.apply(obj,[1,2])

// var x=all.bind(obj)
// x(1,2)



// ***********Slice Method

// var arr=[1,2,3,4,5]

// var x=arr.slice(0,2)

// console.log(x)
// console.log(arr)


// Splice Method

// var arr=[1,2,3,4,5]

// var x=arr.splice(3,1,1,2)
// console.log(x)
// console.log(arr)

//fucntions Are class one obj in javascript

// first class functions ?
//  var fun =  () =>{
//    console.log("Hello")
//  }
// fun()

// Higher OrderFunction?

//  const fun=()=>{
//    console.log("hii")
//  }

//  const fun1 =(fun)=>{
//    fun()
//  }

// fun1(fun)
  
// Function Currying?


// let x=(a)=>(b)=>(c)=>{
//  return a+b+c
// }
// var y=x(1)(2)(3)
// console.log(y

// var c=4
// function x(a,b){
//   console.log(a+b)
// }

// x(1,2)

// Q.how to redeclear Variables without any error?
// a=1
//   switch(a){

//   case 1:{
//     var name;
//   }
//     case 0:{
//       var name;
//     }
//   }

// Q.IIME and its benifite?
// (
//   function(){
//     var msg="Hii"
//     console.log(msg)
//   }
// )()
// console.log(msg)

// var x=encodeURI("https://replit.com/@SanketMusale/DSA-1#index.js")
// console.log(x)
// var r=decodeURI("https://replit.com/@SanketMusale/DSA-1#index.js")
// console.log(r)

// Q ES6 classes in javascript?

//   function Bike(a,b){
//     this.name=a
//     this.lastname=b
//  }
// Bike("sanket","Musale")

// var c=Bike.prototype.get =function(){
//   return (this.name,this.lastname)
// }
// console.log(c.get())

// class Car{
//    constructor(a){
//      this.model =a
//    }
//   getData(){
//     console.log(this.model)
//   }
  
// }

// var x= new Car("Honda City")
// x.getData()
// Q.Closerss

//  function x(a){
//    function c(b){
//      console.log(a+b)
//    }
//    c(2)
//  }
// x(1)

// Promise?
// var x=new Promise(
//   (res)=>{
//     setTimeout(()=>{
//            res("Hi")
//     },500)
//   },
//   (rej)=>{
//     rej("Byy")
//   }
// )
// x.then((value)=>console.log(value))

// Call Back Functions?

// function y(params) {
//    console.log(params)
// }

// function x(y){
//    y("Hii")
// }
// x(y)

// Callback Hell?
// first function(){
//   second function(){
//     third function(){
//       forth function(){
//         fifth function({
          
//         })
//       }
//     }
//   }
// }

// NEsted Promise ?

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 2
//     return result * 3;
//   })
//   .then(function (result) {
//     console.log(result); // 6
//     return result * 4;
//   });

// Q delete Property?

// var obj={
//   name:"sanket",
//   lastname:"Musale"
// }
// console.log(obj)
// delete obj.name
// console.log(obj)
// obj.name="sanket"
// console.log(obj)

// Q object Argument?

// sum(1,2,3)

// function sum(){

//   console.log(arguments)
// }
// Q.How to make FirstLetter in Capital?
// var str="masai"
// var bag=""
//  for(var i=0;i<str.length;i++){
//    if(i==0){
//      // console.log(str[i])
//      bag=bag+str[0].toUpperCase()
     
//    }
//    else{

//      // console.log(str[i])
//      bag=bag+str[i]
//    }}

// var a=new Date()
// var b=new Date()
 
//  console.log(a.getDate())
// Q.Howtocheck String is StartWith or Not

// var x="ok not".startsWith("ok")
// console.log(x)

// Q hoW YOU aDD kEY VALUE pARES in Obj

// var obj = {
//   a:"b",
//   s:"c"
// }
// console.log(obj)
// obj.t="s"
// console.log(obj)

// var str =
//   "This is a \
// very lengthy \
// sentence!";
// console.log(str)

// Con we define property t0 function?
// var i, j
//   loop1: for (i = 0; i < 3; i++) {
//   loop2: for (j = 0; j < 3; j++) {
//     if (i === j) {
//       continue loop1;
//     }
//     console.log("i = " + i + ", j = " + j);
//   }
// }
// console.log(loop1)

// Output is:
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"

//  function Rnumber(min,max){

//     return Math.floor(Math.random() * (max - min +1)+ min)
//  }

// var x=Rnumber(100,1000)
// console.log(x)
// var img = new Image();
// img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";
// img.onload = function () {
//   console.log(this.width + "x" + this.height);
// };

// var x =new Date().toLocaleString()
// console.log(x)

// Q Else if Condition with Conditional Oprator
// c =true

//  c1 ? v1 : c2 ? v2 :c3 ?v3 :c4 ?v4
// define a function iMportance of Semicol0n
// var fn = (function () {
  
// });(
 
//   function () {
   
//   }
// )()

// Q Freezing Object

// var obj={
//   name:"x"
// }
// Object.freeze(obj)
// obj.name ="Y"
// console.log(obj)

// NOt Apply on Nested Object
// const user = {
//   name: 'John',
//   employment: {
//     department: 'IT'
//   }
// };

// Object.freeze(user);
// user.employment.department = 'HR';
// console.log(user)

// var x="i am sanket musale"
// var bag=""
//  for(var i=0;i<x.length;i++){
//    if(i==0 ){
//      bag=bag+x[i].toUpperCase()
//    }
//    else if(x[i]==" "){
//      bag=bag+x[i+1].toUpperCase()
     
//    }
//    else{
//      bag=bag+x[i]
//    }
//  }
// console.log(bag)

// Spread OPrato
// function x(a,...rest){
//    console.log(a)
//   console.log(rest)
// }
// x(1,2,34)

// RESt Oprator
//  function x(z,a,s,d){
//    console.log(z,a,s,d)
  
//  }
// var a=[1,2,3,4]
// x(...a)

// for comparing two value With Using obj 
// var x=Object.is(12,12)
// console.log(x)


// How to Assingn One object to another Object
// const target = { a: 1, b: 2 ,c:2};
// const source = { b: 3,c:0 };

// const returnedTarget = Object.assign(target,source);

// console.log(target); // { a: 1, b: 3, c: 4 }

// console.log(returnedTarget); // { a: 1, b: 3, c: 4 }

// Q.create Obj With PRototype
// var user={
//   name:"sanket",
//   print: function(){
//     console.log(this.name)
//   }
// }

// var x=Object.create(user)

// x.print()

// Q WeakSet ?

// var x=new WeakSet()
// var obj={name:"sanket"}
// x.add(obj)
// x.delete(obj)
// console.log(x)


// Q OBj Getter And Setter
// var obj={
//   name:"sanket",
//   get nam(){
//     console.log(this.name)
//   },
//   set nam(x){
//     this.name=x
//   }
// }

// obj.nam
// obj.nam="Vishal"
// obj.nam

// Swith case

//  function x(a){
//    switch(a){
//      case 1:console.log(1)
//        case 2:console.log(2) 
// default : console.log(a)
//    }
//  }
// x(2)

// var months = [1,2,3,4,5];
// // months.sort();
// // console.log(months); //  ["Aug", "Jan", "June", "Sep",A]
// // var x=months.sort((a,b)=>a-b)
// // console.log(x)
// var y=months.reverse()
// console.log(y)

// var x=[1,2,3,4,5]
// find(x)
// function find(x){

//   var min=Infinity
//   var max=-Infinity

//   for(var i=0;i<x.length;i++){
//      if(x[i]>max){
//        max=x[i]
//      }
    
//   }
//   console.log(max)
// }

// const newObject = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d:5
// };

// console.log(Object.getOwnPropertyNames(newObject));
// console.log(Object.keys(newObject))
// // ["a", "b", "c"];

// var arr=[12,34,56,78,90]

// var ans=arr.includes(30)
// console.log(ans)

// var number=1234567890
// console.log(number.toLocaleString())


// nameSpace? default Not!
// function func1() {
//   console.log("This is a first definition");
// }
// function func1() {
//   console.log("This is a second definition");
// }
// func1(); // This is a second definition


// var obj1 = {
//   function fun1(){
//     console.log("One")
//   }
// }
// obj.fun1()

// for (var i = 0; i < 4; i++) {
//   // global scope
//   setTimeout(() => console.log(i),i*1000);
// }

// for (let i = 0; i < 4; i++) {
//   // block scope
//   setTimeout(() => console.log(i),i*1000);
// }
// console.log(`This is string sentence 
// 'This is string sentence 2`);

// var calculationString = String.raw`The sum of numbers 
// is
// ${
//   1 + 2 + 3 + 4
// }!`;
// console.log(calculationString); // The sum of numbers is 10


// function product(x){
//     function (y){
//       console.log(x*y)
//     }
 
// }
//  var  x=product(4)(5)
// console.log(x)

// Closers?

// function outer(){

//   name ="Sanket"
//   function inner(){
//     name="vishal"
//     console.log("inner",name)
//   }
//   console.log("outer",name)
//   inner()
// }
// outer()

// Higher order components?

// it's advance tech to reuse the component


 // let component1 =(component2)=>{
 //    return (props)=>{
 //      <div className="div1">
 //        <component2 {...props} />
 //        </div>
 //    }
 // }



// Promise?

// function fun1(time){
//    return new Promise((res,rej)=>{

//      if(typeof time !== "number"){
//        rej("Time Should be a number")
//      }
//      setTimeout(()=>{
//         res()
//      },time)
//    })
// }

// fun1("1000").then((res)=>console.log("Hii")).catch((err)=>console.log(err))


// let name="sanket"
// name=20
// console.log(name)
// const name="sanket"
// name="surya"
// console.log(name)

var name

name ="sanket" 
  console.log(name)