class Product {
    constructor(name, category, amount, image){
        this.name = name;
        this.category = category;
        this.amount = amount;
        this.image = image;
    }

    addToBasket(){
        console.log(`Товар ${this.name} успішно додано до кошика!`);
    }
}

class VideoCard extends Product{
    constructor (name, amount, image){
        super(name, "videoCard", amount, image);
    }
}

class Processor extends Product{
    constructor (name, amount, image){
        super(name, "processor", amount, image);
    }
}

function productFactory(product){
    if(product.category == "videoCard"){
        return new VideoCard(product.name, product.amount, product.image);
    }

    if(product.category == "processor"){
        return new Processor(product.name, product.amount, product.image);
    }
}

class Basket {
    constructor(){
        this.products = [];
    }

    add(product){
        product.addAt = new Date().toLocaleTimeString(`uk-UA`);
        this.products.push(product);
        product.addToBasket();
        return product;
    }
}

class Store{
    constructor(){
        this.products = [];
        this.unavailableProducts = [];
        this.basket = new Basket();
    }

    fillStoreWithProducts(data){
        this.products = data.map(product => productFactory(product));
    }

    addToBasket(i){
        const product = this.products[i];
        if(!product || product.amount <= 0){
            return null;
        }

        const item = productFactory({
            name: product.name,
            category: product.category,
            amount: 1,
            image: product.image
        });

        const added = this.basket.add(item);
        product.amount -=1;

        if(product.amount == 0){
            this.products.splice(i, 1);
            this.unavailableProducts.push(product);
        }
        return added;
    }
}

const store = new Store();

const productsElem = document.getElementById("products");
const basketElem = document.getElementById("basket");
const lastElem = document.getElementById("lastAdd");
const countElem = document.getElementById("count");
const unavailableElem = document.getElementById("unavailable");

function create(product, i, unavailable = false){
    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const category = document.createElement("span");
    category.className = "tag " + product.category;
    category.textContent = product.category;

    card.append(image, name, category);
    
    const button = document.createElement("button");
    if(unavailable){
        button.textContent = "Немає в наявності";
        button.disabled = true;
    }
    else{
        const amount = document.createElement("p");
        amount.textContent = `В наявності: ${product.amount}`;
        card.appendChild(amount);

        button.textContent = "Купити";
        button.onclick = function (){
            buy(i);
        };
    }

    card.appendChild(button);
    return card;
}

function showProducts(){
    productsElem.innerHTML = "";

    for(let i = 0; i < store.products.length; i+=1){
        const card = create(store.products[i], i);
        productsElem.appendChild(card);
    }
}

function buy(i){
    const added = store.addToBasket(i);

    if(added){
        lastElem.textContent = `Додано: ${added.name} (${added.addAt})`;
    
        showProducts();
        showUnavailable();
        showBasket();
    }
}

function showUnavailable(){
    unavailableElem.innerHTML = "";

    document.getElementById("unavailableTitle").style.display = store.unavailableProducts.length > 0 ? "block" : "none";

    for(let i = 0; i < store.unavailableProducts.length; i+=1){
        const card = create(store.unavailableProducts[i], i, true);
        unavailableElem.appendChild(card);
    }
}

function showBasket(){
    const items = store.basket.products;

    countElem.textContent = items.length;
    basketElem.innerHTML = "";

    for(let i = 0; i < items.length; i+=1){
        const li = document.createElement("li");

        li.textContent = `${items[i].category} ${items[i].name} (${items[i].addAt})`;
    
        basketElem.appendChild(li);
    }
}

function init(){
    const request = new XMLHttpRequest();
    request.open("GET", "products.json");
    request.onload = function(){
        const data = JSON.parse(request.responseText);

        store.fillStoreWithProducts(data);
        showProducts();
        showUnavailable();
    };
    request.send();
}

init();