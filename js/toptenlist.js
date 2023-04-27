function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) { //parent = ul, el = li (ul unsorted-list, li list-item)
    return parent.appendChild(el); //here we put that el is child to ul
}

const ul = document.querySelector('#drinklist'); //ul is <ul id="drinklist"></ul>
const url = 'data/data.json';

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) { //data is the data in the json-object (file)
        console.log(data.drinks);
        console.log("First on the list: " + data.drinks[0].drinkName);
        let drinks = data.drinks;

        // returns the json-object by creating a new array with map()
        return drinks.map(function (drink) {
            let li = createNode('li');
            li.innerHTML = drink.drinkName + " - " + drink.drinkIngredients;
            append(ul, li); //append makes it so ul is the parent object, and li the child
        })
    })
    .catch(function (error) {
        console.log(error);
    });
