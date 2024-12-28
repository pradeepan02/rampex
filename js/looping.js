a=[10,20,30]
let sum=0;
for (var x of a) {
    sum+=x;
}
console.log(sum);
a=[10,20,30,"hello","world"]
for (const key in a) {
    console.log("index of",a[key],"is",key);    
}
for(let i=0;i<5;i++){
    console.log(i);
    
}
l=0;
while(l<5){
    console.log(l);
    l++;
    
}
do{
    console.log(l);
    
}
while(l<5){
    console.log(l);

}