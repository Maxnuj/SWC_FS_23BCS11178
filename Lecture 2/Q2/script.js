const itemList = document.getElementById("itemList");

// Generate 1000+ items dynamically
let itemsHTML = "";

for (let i = 1; i <= 1000; i++) {
    itemsHTML += `
        <div class="item" data-id="${i}">
            <span>Product ${i}</span>
            <button class="delete-btn">Delete</button>
        </div>
    `;
}

itemList.innerHTML = itemsHTML;

// Event Delegation
itemList.addEventListener("click", function (event) {

    // Check if delete button was clicked
    if (event.target.classList.contains("delete-btn")) {

        // Find the parent item
        const item = event.target.closest(".item");

        // Remove the correct item
        item.remove();
    }
});
