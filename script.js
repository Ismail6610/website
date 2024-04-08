featured_products=[
    {
        id:1,
        product:"Anti-Gravity Humidifier Water Droplet Backflow Aromatherapy Machine Large Capacity Office Bedroom Silent Large Fog Volume Spray",
        price:39.99,
        image:"./assets/product1.png"
    },
    {
        id:2,
        product:"Anti-Gravity Humidifier Water Droplet Backflow Aromatherapy Machine Large Capacity Office Bedroom Silent Large Fog Volume Spray",
        price:39.99,
        image:"./assets/product2.png"
    },
    {
        id:3,
        product:"Anti-Gravity Humidifier Water Droplet Backflow Aromatherapy Machine Large Capacity Office Bedroom Silent Large Fog Volume Spray",
        price:39.99,
        image:"./assets/product3.png"
    }
]

document.addEventListener('DOMContentLoaded',function(){
    const featuredList=document.querySelector('.featured-products');

    function renderProducts(products){
        featuredList.innerHTML='';

        featured_products.forEach(product=>{
            const listItem=document.createElement('div');
            listItem.classList.add('product');

            listItem.innerHTML=`
                <img src="${product.image}";<br>
                <p id="product-name">${product.product}</p>
                <p>Price:$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="1" id="button">Add to cart</button>
            `;

            featuredList.appendChild(listItem);
        });
    }
    renderProducts(featured_products);
})