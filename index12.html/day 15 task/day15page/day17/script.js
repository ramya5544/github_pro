let seconds=10;
let timer=setInterval(()=>{
    console.log(seconds);
    seconds--;
},1000);
setTimeout(()=>{
    clearInterval(timer);
    setTimeout(()=>{
        console.log('happy independence day');
    },1000);
},10000);

