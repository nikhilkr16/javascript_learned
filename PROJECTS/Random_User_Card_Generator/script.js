const btn=document.getElementById("btn");
const cards=document.getElementById("card");

let readData=()=>{

btn.addEventListener("click",async()=>{
    try{
        let res=await fetch("https://randomuser.me/api/");
        if(!res.ok) throw Error(res.statusText);
        let data=await res.json();
        let detail=data.results[0];
        let location=` s${detail.location.state},${detail.location.country}`;
        return cards.innerHTML=`
        <div class="card" ">
  <img src="${detail.picture.large}" alt="Avatar" class="img">
  <div class="container">
    <h4>${detail.name.first} ${detail.name.last} </h4>
    <span>${location}</span>
  </div>
</div>`;
    }catch(error){
        console.log(error);
        cards.innerHTML=`<h1>Error: ${error}</h1>`;
    }
})
}
readData();
