
"use strict"
//use of use strict
//error show garxa
//helps avoid accidental error
//prevents us from doing certain things.. 
const a=10;
var b=a+10;
console.log(a);
function myfunction(){
    let a=10;
    if(a>5){
       let a=20;//locally variable declare garna
       console.log(a);

   }
    console.log(a)}

    // "use strict"
    // false//boolean
    // "true"// string
    // Document.title//string
    // "some string".length//number
    // null//object//
    


//string,number,float,array,boolen,object;
const am =10;
var b=am+10;
console.log(am);
function myfunction(){
    let a=10;
    if(a>5){
       let a=20;//locally variable declare garna
       console.log(am);

   }
    console.log(a)

}
myfunction()

function myfunction(){
   var a=10;
   if(a>5){
       var a=20;//globally variable declare garna
       console.log(a);

   }
   console.log(a)

}
myfunction()
let m="this is example of string"
let b=10
let c=10.4
let d=true
let e=[1,2,"this",true]

undefined,null
console.log(typeof d)
let hasDriversLicense=false;
const passTest=true;
if(passTest){
    hasDriversLicense=true;

}
if(hasDriversLicense){
    console.log("I am a driver");
}
// let private=10
// console.log(private)
// array manupulation
// let array1=[1,2,3,4,5,6];
// array1.push(20);//to add value at last
// console.log(array1);
// array1.pop(7);// to remove last value
// console.log(array1)
// array1.unshift(100);
// console.log(array1)
// array1.shift()
// console.log(array1)

let array1=["apple","cat","orange","ball"];
let ar = array1.indexOf("ball");
console.log(ar)//if there is not element then it will show -1

//alert(array1.includes("d"));//shows the alert popup
let firstName="Manisha";
let lastName ="Tamang";
let age=19;
let group ="L4CG7"
//console.log("My first name is " + firstName + " and my last name is "+ lastName );

//string literals
console.log(`My name is ${firstName} and my last name is ${lastName} .My age is ${age} and my group is ${group}.`)
