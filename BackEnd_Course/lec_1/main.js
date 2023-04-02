function fibonacci(){
    let f=0,s=1;
    return function(){
          let a=f;
          f=s;
          s=a+f;
          return f;
    }
}
let fun =fibonacci();
for(let i=0;i<5;i++){
    console.log(fun())
}
