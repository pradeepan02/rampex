//1.varaibles
//var,const,let ---refer in dec.js

//2.Arrow function
func=()=>{
    return "hello";
}
console.log(func());


func=(a)=>{
    return a
    
}
console.log(func(["a","b","c","mm"]))


func=()=>{
    console.log("hello");
    
}
func()


func=(a)=>{
console.log(a)
}
func("hello bhai")
//destructuring
var marks=[1,2,3,4,5]
var [m1,m2,m3,m4,m5]=marks;
console.log(m1,m2)
var [m1,m2]=marks;
console.log(m1,m2)
//ternary 
m1=20;
console.log((m1>15)?"pass":"fail");

//spread
var m1=[4,5,6]
var m2=[1,2,4,...m1]
console.log(m2);

//rest
dem =(a,b,...c)=>{
    console.log(a);
    console.log(b);
    console.log(c);
}
dem(1,2,3,4,5,6);
//scope
var a=10;
{
    a=a+a;
    console.log(a);  
}
console.log(a);
//hosting
console.log(c);
var c=10;
console.log(c);


// console.log(d);
//             ^
// ReferenceError: Cannot access 'd' before initialization
const d=10;
console.log(d);

// console.log(f);
//             ^
// ReferenceError: Cannot access 'f' before initialization
let f=10;
console.log(f);



//for each
arr=[1,2,3,4,5]
arr.forEach((e,i)=> {
    console.log(e,i);
});
//object with for each
// for(key of obj){
//     ^
// TypeError: obj is not iterable
// for({key,val} of obj){
//                  ^
// TypeError: obj is not iterable
obj={"a":1,"b":2}
for(key in obj){
    console.log(key,obj[key]);
}