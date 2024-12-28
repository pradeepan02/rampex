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