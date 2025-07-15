const btn=document.getElementById("btn");
const joke=document.getElementById("joke");
let readData=()=>{

    btn.addEventListener("click",async()=>{
  
try{

    let res= await fetch("https://official-joke-api.appspot.com/jokes/random");
    if(!res.ok) throw Error(res.statusText);
    let data=await res.json();
    return joke.innerText= `${data.setup} - ${data.punchline}`;
}catch(error){
    console.log(error);
}


})}

readData();