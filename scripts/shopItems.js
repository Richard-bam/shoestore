function shoes(id, name, brand, image, blurb, price) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.image = image;
    this.blurb = blurb;
    this.price = price;
}

let shoe1 = new shoes(
    0,
    "Fancy Dress Shoe",
    "Doc Martin",
    "./images/black-fancy.png",
    "The shoe for those occasions where one is required to look one's best. Designed by the renowned Giovanni a truly exquisite shoe.",
    3200
)

let shoe2 = new shoes(
    1,
    "Black Nike",
    "Nike",
    "./images/black-nike.png",
    "This is your basic run of the mill Nike sneaker. Nothing special but everyone should have atleast one pair of someting like this.",
    2000
)

let shoe3 = new shoes(
    3,
    "Green Boots",
    "Nike",
    "./images/green-football.png",
    "We're in the middle of winter now. Prime football and rugby season. Buy these if you want to stand out a bit while you're standing in the pissing rain",
    1400
)

let shoe4 = new shoes(
    4,
    "Leather Cowboy Boots",
    "Yee-Haw",
    "./images/cowboy-boot.png",
    "Yee-Haw partner. What else is there to say really.",
    4000
)

let shoe5 = new shoes(
    5,
    "Black Heels",
    "Versace",
    "./images/black-heels.png",
    "A stylish black heel which could also probably double up as a decent weapon in times of need.",
    3000
)

let shoe6 = new shoes(
    6,
    "Black Running Shoes",
    "Brandless",
    "./images/black-runningShoes.png",
    "Some more pretty basic run of the mill shoes. You're not going to get a bunch of compliments or anything but you really should have a pair",
    1800
)

let shoe7 = new shoes(
    7,
    "Red Converse",
    "Converse",
    "./images/red-converse.png",
    "Converse is prett last year, but I can tell that you're a daring trend setter. People called aristotle mad for saying the earth was round. This could be a similar situation",
    900
)

let shoe8 = new shoes(
    8,
    "White Adidas",
    "Adidas",
    "./images/white-Adidas.png",
    "The only pair of white shoes that we have for some reason. They're Ok",
    2200
)

let productArray = [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7, shoe8]