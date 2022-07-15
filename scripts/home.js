//creating empty array for cart items to be stored in
let cartItems = [];
//setting a null total 
let total = null;

//checking if page has been loaded before
//if it has change the values for cart items and total to the values saved in sessionStorage
if (sessionStorage.getItem("loaded") === null) {
    sessionStorage.setItem("loaded", true);
    total = 0;
    cartItems = []
    sessionStorage.setItem("total", total);
    sessionStorage.setItem("Cart Items", cartItems)
} else {
    total = Number(sessionStorage.getItem("total"));
    cartItems = JSON.parse(sessionStorage.getItem("Cart Items"))
}


//function displays products on landing page
function displayProducts() {

    let template = document.getElementById("catalogue")
    //creating a product card for each item in the array
    productArray.forEach((element) => {
        //creating all the elements we want to add to the product card
        let cartBtn = document.createElement("button")
        let section = document.createElement("section");
        let img = document.createElement("img");
        let nme = document.createElement("h4");
        let price = document.createElement("p");
        let blurb = document.createElement("p");
        //creating each product dynamically based on its values stored in the productArray
        img.src = (element.image);
        img.id = element.id
        nme.innerHTML = `${element.name}`;
        price.innerHTML = `R ${element.price}`;
        blurb.innerHTML = `${element.blurb}`;
        section.className = "productCards"


        cartBtn.innerHTML = `Add to Cart`

        //adding event listener to addToCart button
        cartBtn.addEventListener("click", function () {
            //pushes new items into array and stores it in sessionStorage
            cartItems.push(element);
            sessionStorage.setItem("Cart Items", JSON.stringify(cartItems))

            //adds item price to total and alerts the new total as well as saving it to sessionStorage
            total += element.price
            alert("Your total is" + total)
            sessionStorage.setItem("total", JSON.stringify(total))
        });
        //adding event listener to each image. will move user to product page and create the page dynamically
        img.addEventListener("click", function (e) {

            let id = parseInt(e.target.id);
            const product = productArray.find((item) => item.id === id)
            sessionStorage.setItem("productList", JSON.stringify(product))
            window.location.assign("./productPage.html")
        });


        //appending all the items to the page
        section.appendChild(img);
        section.appendChild(nme);
        section.appendChild(price);
        section.appendChild(blurb);
        section.appendChild(cartBtn);

        template.appendChild(section);
    });
}


//function called in cart page. displays items purchased as well as total before and after VAT
function cartLoad() {
    //if the cart is empty the user will be returned to the home page and alerted that the cart is empty
    if (sessionStorage.getItem("Cart Items") == []) {
        alert("CART IS EMPTY")
        window.location.assign("./index.html")
    } else {

        template.innerHTML = null
        let cartItems = JSON.parse(sessionStorage.getItem("Cart Items"));
        let finalTotal = document.getElementById("final-total");

        //displaying each item stored in the cart
        cartItems.forEach(element => {

            let image = document.createElement("img");
            image.src = element.image;

            let name = document.createElement("p");
            name.innerHTML = element.name;

            let price = document.createElement("p");
            price.innerHTML = ("R" + element.price);

            //adding a delete button to each item in the cart
            let delButton = document.createElement("button")
            delButton.innerHTML = "delete"

            //creating a breakspace between each item
            let breakSpace = document.createElement("br");
            //appending all the items to the template
            template.appendChild(image);
            template.appendChild(name);
            template.appendChild(price);
            template.appendChild(breakSpace);
        })
        //display total before and after VAT
        let totalHolder = document.createElement("p");
        let totalHolder2 = document.createElement("p");
        let newTotal = JSON.parse(sessionStorage.getItem("total"));
        finalTotal.innerHTML = null


        totalHolder.innerHTML = ("Total before VAT:R" + newTotal);
        let afterVAT = (newTotal * 115 / 100);
        //update latest total after delivery or pickup is checked
        if (document.getElementById("delivery").checked == true) {
            afterVAT += 500
        }
        //updating the total if a discount code is entered
        let discount = document.getElementById("discount")
        discount.addEventListener("change", function () {
            if(sessionStorage.getItem("discounted") == null){
            let total = Number(sessionStorage.getItem("total"))
            total -= 200
            sessionStorage.setItem("total", total)
            cartLoad()
            sessionStorage.setItem("discounted", true)
            }
        })

        
        totalHolder2.innerHTML = ("Final Total:R" + afterVAT);
        //appending the final totals to the page
        finalTotal.appendChild(totalHolder);
        finalTotal.appendChild(totalHolder2);
    }
}


//function generates a random reference number clears session storage and sends user back to index page
function finalCheckout() {
    let chars = "1234567890!@#$%^&*abcdefghijklmnopqrstuvwxyz()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let refLength = 7
    let reference = ""

    if ((document.getElementById("delivery").checked || document.getElementById("pickUp").checked) !== true) {
        alert("select a delivery option")
    } else {
        for (let i = 0; i <= refLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            reference += chars.substring(randomNumber, randomNumber + 1);
        }
        alert("Thank you for your purchase. Your reference number is " + reference)
        sessionStorage.clear();
        window.location.assign("./index.html")
    }
}



//product fetch gets the information of the selected item from sessionStorage
//then displays it on the product page
function productFetch() {
    let displayedProduct = JSON.parse(sessionStorage.getItem("productList"));

    let productContainer = document.getElementById("productContainer");
    let cartBtn = document.createElement("button");
    let img = document.createElement("img");
    let nme = document.createElement("h4");
    let price = document.createElement("p");
    let blurb = document.createElement("p");

    img.src = (displayedProduct.image);
    img.id = displayedProduct.id
    nme.innerHTML = `${displayedProduct.name}`;
    price.innerHTML = `R ${displayedProduct.price}`;
    blurb.innerHTML = `${displayedProduct.blurb}`;


    cartBtn.innerHTML = `Add to Cart`

    //adding event listener to addToCart button
    cartBtn.addEventListener("click", function () {
        //pushes new items into array and stores it in sessionStorage
        cartItems.push(displayedProduct);
        sessionStorage.setItem("Cart Items", JSON.stringify(cartItems))

        //adds item price to total and alerts the new total as well as saving it to sessionStorage
        total += displayedProduct.price
        alert("Your total is" + total)
        sessionStorage.setItem("total", JSON.stringify(total))
    });


    //appending all the items to the container
    productContainer.appendChild(img)
    productContainer.appendChild(nme)
    productContainer.appendChild(blurb)
    productContainer.appendChild(price)
    productContainer.appendChild(cartBtn)
}