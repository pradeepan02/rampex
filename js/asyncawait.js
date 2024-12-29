// async function fun() {
//     //the return in settimeout cannot catched in the await in nam because it returns a standard value not a proomise
//     setTimeout(() => {
//        return "hello"
//     }, 5000);
//     return "hell0"
    
// }
// async function nam() {
//     //await it only waits to get a promise from a async function
//     var d=await fun();
//     console.log(d);
// }
// //to resolve promise we can use then the function
// nam().then((a)=>{
//     console.log(a);  
// })

function istime(t){
    time=1000;
    return t<time;
}
function isloc(loc){
    lo="Erode";
    return loc===lo;
}
