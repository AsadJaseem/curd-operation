let itemList = [];

function addItem() {
    let inputField = document.getElementById("inputField");
    let newItem = inputField.value.trim();
    if (newItem !== "") {
        itemList.push(newItem);
        inputField.value = "";
        displayItems();
    } else {
        alert("Please enter text!");
    }
}

function displayItems() {
    let itemListElement = document.getElementById("itemList");
    itemListElement.innerHTML = "";
    itemList.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        itemListElement.appendChild(li);
        li.addEventListener('click', function() {
            let result = confirm("Do you want to delete this item?");
            if (result) {
                deleteItem(item);
            }
        });
    });
}

function deleteItem(item) {
    let index = itemList.indexOf(item);
    if (index !== -1) {
        itemList.splice(index, 1);
        displayItems();
    }
}
