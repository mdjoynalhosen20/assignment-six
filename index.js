<script>
    // Example product data
    const products = [
        {
            id: 1,
            name: "Mango Tree",
            description: "A fast-growing tropical tree that produces delicious, juicy mangoes during summer.",
            price: 500
        },
        {
            id: 2,
            name: "Guava Tree",
            description: "A small tropical tree that bears sweet and aromatic guavas all year round.",
            price: 450
        },
        {
            id: 3,
            name: "Apple Tree",
            description: "A deciduous tree that bears delicious, crisp apples in autumn. Requires cooler climate.",
            price: 600
        }
    ];

    const productGrid = document.querySelector('.product-grid'); // HTML এ একটি class যোগ করতে হবে

    // Function to render products
    function renderProducts() {
        productGrid.innerHTML = ''; // Clear existing products
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'bg-white rounded-lg p-4 card-shadow flex flex-col items-start';
            productCard.innerHTML = `
                <div class="bg-gray-200 w-full h-40 rounded-lg"></div>
                <h4 class="mt-4 text-lg font-semibold">${product.name}</h4>
                <p class="text-sm text-gray-600 mt-1">${product.description}</p>
                <div class="flex items-center justify-between w-full mt-4">
                    <span class="text-[#3A8D56] font-bold">৳${product.price}</span>
                    <button class="bg-[#3A8D56] text-white py-2 px-4 rounded-full text-sm hover:bg-[#2C6E4A]">Add to Cart</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }

    // Call the function to render products on page load
    renderProducts();
</script>