document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("crudForm");
    const itemList = document.getElementById("itemList");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const itemNameInput = document.getElementById("itemName");
        const itemName = itemNameInput.value.trim();

        if (itemName !== "") {
            const li = document.createElement("li");
            li.textContent = itemName;
            itemList.appendChild(li);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            li.(deleteButton);

            deleteButton.addEventListener("click", ) {
                itemList.(li);
            });

            itemNameInput.value = "";
        }
    });
});
