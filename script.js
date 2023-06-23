let list = document.getElementById("list");
for(let i = 8; i <= 20; i++){
  if(i % 2 === 0){
    let listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}