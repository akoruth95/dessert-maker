console.info('Welcome to the dessert maker v1.0.');

var currentFruit = null;
var currentDessert = null;
var currentMix = null;

var dessertHolder = document.querySelector('.Holder--dessert');
var fruitHolder = document.querySelector('.Holder--fruit');
var resultHolder = document.querySelector('.Holder--result');

var images = {
  fruits: {
    apple: 'img/Apple.jpg',
    orange: 'img/Orange.jpg',
    banana: 'img/Banana.jpg'
  },
  desserts: {
    icecream: 'img/IceCream.jpg',
    cake: 'img/Cake.jpg',
    pie: 'img/Pie.jpg'
  },
  mixes: {
    apple: {
      icecream: 'img/AppleIceCream.jpg',
      cake: 'img/AppleCake.jpg',
      pie: 'img/ApplePie.jpg'
    },
    orange: {
      icecream: 'img/OrangeIceCream.jpg',
      cake: 'img/OrangeCake.jpg',
      pie: 'img/OrangePie.jpg'
    },
    banana: {
      icecream: 'img/BananaIceCream.jpeg',
      cake: 'img/BananaCake.jpg',
      pie: 'img/BananaPie.jpg'
    }
  }
};


var apple = document.querySelector('.Fruit--apple');
apple.addEventListener('click', function() {
  currentFruit = images.mixes.apple;
  fruitHolder.childNodes[1].src = images.fruits.apple;
  if (currentDessert === "icecream") {
    currentMix = currentFruit.icecream;
  } else if (currentDessert === "cake") {
    currentMix = currentFruit.cake;
  } else if (currentDessert === "pie") {
    currentMix = currentFruit.pie;
  }
  result();
});

var orange = document.querySelector('.Fruit--orange');
orange.addEventListener('click', function() {
  currentFruit = images.mixes.orange;
  fruitHolder.childNodes[1].src = images.fruits.orange;
  if (currentDessert === "icecream") {
    currentMix = currentFruit.icecream;
  } else if (currentDessert === "cake") {
    currentMix = currentFruit.cake;
  } else if (currentDessert === "pie") {
    currentMix = currentFruit.pie;
  }
  result();
});

var reset = document.querySelector('.Reset');
reset.addEventListener('click', function() {
  fruitHolder.childNodes[1].src = "";
  dessertHolder.childNodes[1].src = "";
  resultHolder.childNodes[1].src = "";
  currentMix = null;
  currentFruit = null;
  currentDessert = null;
});

var banana = document.querySelector('.Fruit--banana');
banana.addEventListener('click', function() {
  currentFruit = images.mixes.banana;
  fruitHolder.childNodes[1].src = images.fruits.banana;
  if (currentDessert === "icecream") {
    currentMix = currentFruit.icecream;
  } else if (currentDessert === "cake") {
    currentMix = currentFruit.cake;
  } else if (currentDessert === "pie") {
    currentMix = currentFruit.pie;
  }
  result();
});

var icecream = document.querySelector('.Dessert--icecream');
icecream.addEventListener('click', function() {
  currentDessert = "icecream";
  if (currentFruit != null) {
    currentMix = currentFruit.icecream;
    console.log(currentMix);
  }
  dessertHolder.childNodes[1].src = images.desserts.icecream;
  result();
});

var cake = document.querySelector('.Dessert--cake');
cake.addEventListener('click', function() {
  currentDessert = "cake";
  if (currentFruit != null) {
    currentMix = currentFruit.cake;
    console.log(currentMix);
  }
  dessertHolder.childNodes[1].src = images.desserts.cake;
  result();
});

var smoothie = document.querySelector('.Dessert--smoothie');
smoothie.addEventListener('click', function() {
  currentDessert = "pie";
  if (currentFruit != null) {
    currentMix = currentFruit.pie;
    console.log(currentMix);
  }
  dessertHolder.childNodes[1].src = images.desserts.pie;
  result();
});

function result() {
    if (currentMix != null) {
    resultHolder.childNodes[1].src = currentMix;
  } else {
    return;
  }
}
