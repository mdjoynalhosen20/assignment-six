// Example product data
// const products = [
//     {
//         id: 1,
//         name: "Mango Tree",
//         description: "A fast-growing tropical tree that produces delicious, juicy mangoes during summer.",
//         price: 500
//     },
//     {
//         id: 2,
//         name: "Guava Tree",
//         description: "A small tropical tree that bears sweet and aromatic guavas all year round.",
//         price: 450
//     },
//     {
//         id: 3,
//         name: "Apple Tree",
//         description: "A deciduous tree that bears delicious, crisp apples in autumn. Requires cooler climate.",
//         price: 600
//     }
// ];

// const productGrid = document.querySelector('.product-grid'); // HTML এ একটি class যোগ করতে হবে

// // Function to render products
// function renderProducts() {
//     productGrid.innerHTML = ''; // Clear existing products
//     products.forEach(product => {
//         const productCard = document.createElement('div');
//         productCard.className = 'bg-white rounded-lg p-4 card-shadow flex flex-col items-start';
//         productCard.innerHTML = `
//             <div class="bg-gray-200 w-full h-40 rounded-lg"></div>
//             <h4 class="mt-4 text-lg font-semibold">${product.name}</h4>
//             <p class="text-sm text-gray-600 mt-1">${product.description}</p>
//             <div class="flex items-center justify-between w-full mt-4">
//                 <span class="text-[#3A8D56] font-bold">৳${product.price}</span>
//                 <button class="bg-[#3A8D56] text-white py-2 px-4 rounded-full text-sm hover:bg-[#2C6E4A]">Add to Cart</button>
//             </div>
//         `;
//         productGrid.appendChild(productCard);
//     });
// }

// // Call the function to render products on page load
// renderProducts();

const fetchAllCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/categories');
    const data = await res.json();
    displayCategories(data.categories)

};
fetchAllCategories();

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById("categoriesContainer");
    categories.forEach(category => {
        const li = document.createElement("li");
        li.innerHTML = ` <li class="py-2 px-3 bg-gray-100 mt-2 hover:text-white cursor-pointer rounded-md hover:bg-[#3A8D56]">${category?.category_name}</li>`
        categoriesContainer.appendChild(li)
    });

    console.log("Hello world")
};

const displayProducts = (products) => {
    const productsContainer = document.getElementById("productsContainer");
    products.forEach(product => {
        const cardDiv = document.createElement("div");
    cardDiv.classList = " bg-white rounded-lg p-4 card-shadow flex flex-col items-start"
    cardDiv.innerHTML = `
    <div class="bg-gray-200 w-full h-40 rounded-lg">
    <img src=${product.image} alt=${product.name} class="h-full w-full object-cover rounded-lg" >
    </div>
                    <h4 class="mt-4 text-lg font-semibold">${product.name}</h4>
                    <p class="text-sm text-gray-600 mt-1">${product.description}</p>
                    <div class="flex items-center justify-between w-full mt-4">
                        <span class="text-[#3A8D56] font-bold">৳${product.price}</span>
                        <button class="bg-[#3A8D56] text-white py-2 px-4 rounded-full text-sm hover:bg-[#2C6E4A]">Add to Cart</button>
                    </div>
    `; 

    productsContainer.appendChild(cardDiv); 
    });
};
const fetchPlantData = async (category) => {
    const url = category ? `https://openapi.programming-hero.com/api/category/${category.id}` : "https://openapi.programming-hero.com/api/plants";

    const res = await fetch(url);
    const data = await res.json();
    console.log("data of all Products using categories", data);
    displayProducts(data?.plants);
};
fetchPlantData(); 