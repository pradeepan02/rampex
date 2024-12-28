let year=1500;
if(year%4==0){
    if(year%100==0 && year%400==0){
        console.log("leap year");
    }
    else{
        console.log("not leap year");
    }
}
else{
    console.log("not leap year");
    
}