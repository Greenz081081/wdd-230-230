const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", () => {
    if (input.value != "") {

    let newlistElement = document.createElement("li");
    let deleteButton = document.createElement("button");

    newlistElement.textContent = input.value;
    deleteButton.textContent = "❌"
    input.value = "";

    newlistElement.appendChild(deleteButton);
    list.appendChild(newlistElement);

    input.focus();
    
    deleteButton.addEventListener("click",() => 
    list.removeChild(newlistElement));

}
   
});