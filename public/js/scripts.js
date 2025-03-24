document.getElementById("loadData").addEventListener("click", async () => {
    try {
        const response = await fetch("/api/items");
        const data = await response.json();

        let output = "<h2>Items List</h2><div class='items-container'>"; // Start a container for the items

        // Iterate over each item in the data
        data.forEach(item => {
            // Build each item with an image, name, price, and description
            output += `
                <div class="item">
                    <img src="${item.imageUrl}" alt="${item.name}" class="item-image">
                    <h3 class="item-name">${item.name}</h3>
                    <p class="item-price">$${item.price}</p>
                    <p class="item-description">${item.description}</p>
                </div>
            `;
        });

        output += "</div>"; // End the container for items

        // Insert the output into the DOM
        document.getElementById("output").innerHTML = output;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
