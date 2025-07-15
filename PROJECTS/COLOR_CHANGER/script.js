// console.dir(document);
const btnStart=document.querySelector("#btn1");
const btnStop=document.querySelector("#btn2");

const hex="0123456789ABCDEF";
let getRandomColor=()=>{
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let IntervalID;
const StartChangingColor=()=>{
  

    const changeColor=()=>{
        document.body.style.backgroundColor=getRandomColor();
        console.log(getRandomColor());


    }
    if(!IntervalID){
        IntervalID= setInterval(changeColor,1000);

    }

    

}


const StopChangingColor=()=>{
    clearInterval(IntervalID);
    IntervalID=null;
    
}

btnStart.addEventListener("click",StartChangingColor);
btnStop.addEventListener("click",StopChangingColor);

