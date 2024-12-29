
async function shr(li){
    return new Promise((isshr,isnotshr)=>{
        if(li=="Liked"){
            isshr("Shared")
        }
        else{
            isnotshr("Not Shared")
        }
        
    })
}
async function lid(cmte){
    return new Promise((islid,isnotlid)=>{
        if(cmte=="Commeted"){
            islid("Liked")
        }
        else{
            isnotlid("Not Liked")
        }
        
    })
}
async function cmt(pose){
    return new Promise((iscmt,isnotcmt)=>{
        if(pose=="Posted"){
            iscmt("Commeted")
        }
        else{
            isnotcmt("Not Commeted")
        }
        
    })
}
async function creat(pic){
    var pos= new Promise((ispost,isnotpost)=>{
        if(pic=="yes"){
            ispost("Posted")
        }
        else{
            isnotpost("Not Posted")
        }
    })
    // //Promise.all()==>it should be array
    // var [post,commet,like]=await Promise.all([pos,cmt(),lid()])
    // return [post,commet,like]
    var post=await pos;
    var cm=await cmt(post);
    var li=await lid(cm);
    var shra=await shr(li);
    return [post,cm,li,shra] 
}
creat("yes").then((a)=>{
    a.forEach(element => {
        console.log(element);
    });
}).catch((err)=>{
    console.log(err);  
})