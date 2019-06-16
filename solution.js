var recipe ={
    Title: "Good Food",
    Servings: 2,
    Ingredients: ["Cinnamon", "Cumin", "Cocoa"],
    }
    console.log("Title: "+recipe.Title)
    console.log("Serving: "+recipe.Servings)
	console.log("Ingredients: "+recipe.Ingredients)

var books =[
{Title: "The lord of the Rings",
Author: "J.R.R Tolkien",
alreadyRead: false},
{Title: "The Hobbit",
Author: "J.R.R Tolkien",
alreadyRead: true,
}
]

if (books[0].alreadyRead==true){
console.log("You already read " + books[0].Title +" by "+ books[0].Author)

} else if (books[0].alreadyRead==false){
console.log("You still need to read "+ books[1].Title +" by "+ books[1].Author)

}
