const add=document.getElementById("add");
const input=document.getElementById("input");
const list=document.getElementById("list");



add.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.classList.add("list");
  setTimeout(() => {alert("Added");},500);


  const span = document.createElement("p");
  span.innerHTML =taskText;



  const doneBtn = document.createElement("button");
  doneBtn.innerText = "✅";
  doneBtn.addEventListener("click", () => {
    li.innerHTML = `<stike class="completed">${taskText}</srike>`;

    setTimeout(() => {alert("Task Completed");},500);

  });


  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", () => {
    
    li.remove();
    setTimeout(() => {alert("Task Deleted");},500);

  });

  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
},2000);


