
data=()=>{
    console.log("data stored succesfully"); 
}
file=(msg,cb)=>{
    setTimeout(()=>{
        cb();
         
    },1000)
    console.log(msg); 
}
file("Hell",data)