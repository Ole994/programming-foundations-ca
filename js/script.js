//Question 1
var outOfStock = true;
if (outOfStock === true) {
    console.log ("outOfStock");
}
else {
    console.log("In stock");
};


//Question 2

for (var i = 15; i <= 25; i++) {
    if ((i ===17) || (i ===20)) {
        console.log(i);
    }   
};

//Question 3
var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

for(game of games){
    for(prop in game){
        if(game.rating <= 3.5){
            document.querySelector(".games").innerHTML += "<li>" + game.title  + game.rating + "</li>";
            break;
        };
    };
};





    //Question 4
    var whatIDontLike =(notlike)=>{
        if(typeof notlike === "string"){
            console.log("I don't like " + notlike);
        }else{
            console.log("Please send in a string")
        }
    };

    whatIDontLike("babyScreams")
    
    
    
    // * Question 5
    var numberConverter =(arg1, arg2)=>{
        arg1 = Number(arg1)
        arg2 = Number(arg2)
        if(isNaN(arg1) || isNaN(arg2)){
            console.log("Invalid arguments(s)")
            return "Invalid argument(s)"
        }else{
            var subtract = arg2 - arg1;
            console.log(subtract)
            return subtract
        }   
    }

    numberConverter("aaa","44")
numberConverter(100,"520")
var subtraction = document.querySelector("#subtraction")
subtraction.innerHTML += "<ul>" + "<li>" + numberConverter(100, 520) + "</li>" + "</ul>"


// * Question 6
var button = document.querySelector(".page")
var title = document.querySelector("title")
var bg = document.querySelector("body")
var headline = document.querySelector("h1")
var list = document.querySelector(".games")
button.addEventListener("click", () =>{
    title.innerHTML = "Updated title"
    bg.style.background = "yellow"
    headline.style.color = "green"
    headline.style.fontFamily = "impact"
    headline.innerHTML = "<h1>" + "<a href='#'>" + "Programming Foundations Course Assignment" + "</a>" + "</h1>"
    list.style.padding = "0"
    list.style.listStyle = "none"
});

// * Question 7
var price = document.querySelector(".price")
var total = document.querySelector("#total")

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
]

price.addEventListener("click", () =>{
    sum = 0;
    for(toy of toys){
        for(prop in toy){
            toy.price = Number(toy.price);
            sum += toy.price; 
            break;
        };  
    };
    console.log(sum)
    total.innerHTML = "The total sum is:" + sum;
});
