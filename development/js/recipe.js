// #####||#####################################################
// ####\||/#### ROBOCZY KOD DO USUNIĘCIA NA PRODUKCJI #########
// #####\/#####################################################


/*  PRZEPIS (POMOCNICZO SKOPIOWANY TEKST Z SNIPPETSÓW)
Ten plik zawiera implementację obiektu reprezentującego przepis, jego medoty oraz pola obiektu. Na końcu sposób użycia, polacam odpalić konsolę ;p

Recipe(id,title,description)
    id           - int, identyfikator przepisu
    title        - string, nazwa przepisu
    description  - string, opis przepisu
    ingredients  - array, składniki przepisu
    instructions - array, instrukcje przepisu
*/

function Recipe(id, title, description) {
    this.id = id; // id przepisu
    this.title = title; // nazwa przepisu
    this.description = description; // opis przepisu
    this.ingredients = []; // składniki przepisu
    this.instructions = []; // instrukcje przepisu
}

/*
 Metoda `.showInfo()`
 wyświetlająca w konsoli wszystkie informacje o przepisie */
Recipe.prototype.showInfo = function () {
    console.warn(this.id, this.title); // wyświetl id oraz tytuł
    console.warn(this.description); // wyświetl opis
    this.ingredients.map(function (elem, i) {
        console.warn(i, elem); // wyświetl każdy element
    });
    this.instructions.map(function (elem, i) {
        console.warn(i, elem); // wyświetl każdy element
    })
};


// przygotowanie globalnej zmiennej przechowującej wszystkie przepisy
var allRecipies = [];

// utworzenie kilku przykładowych przepisów
var newRecipe1 = new Recipe(allRecipies.length + 1, "Jajecznica na boczku", "Taką jajecznicę lubie najbardziej ;p ");
allRecipies.push(newRecipe1); // dodanie przepisu do globalnej tablicy
var newRecipe2 = new Recipe(allRecipies.length + 1, "Fasolka po bretońsku", "Taka fasolka że kołdrę podnosi!");
allRecipies.push(newRecipe2);
var newRecipe3 = new Recipe(allRecipies.length + 1, "Sałatka grecka", "Oryginalna sałatka grecka z pomidora, ogórka, czerwonej cebuli i czarnych oliwek, z oliwą i oregano. ");
allRecipies.push(newRecipe3);
var newRecipe4 = new Recipe(allRecipies.length + 1, "Zapiekanka z brukselka", "Mamusina najlepsza zapiekanka pod słońcem. Można ją podać jako główne danie albo jako kolację. W zapiekance możesz użyć również kiełbasy paprykowej sprawi ona, że zapiekanka będzie ostrzejsza w smaku. Zgodnie z zalecanimi Makłowicza, podawać z dobrze dobranym winkiem ;)");
allRecipies.push(newRecipe4);

// dodawanie składników do przepisu (newRecipe1, allRecipies[0])
newRecipe1.ingredients.push("3 jajka");
newRecipe1.ingredients.push("mała cebula");
newRecipe1.ingredients.push("szczypiorek");
newRecipe1.ingredients.push("5 plasterków boczku");

newRecipe1.instructions.push("Rozpuść masło na patelni i podgrzej.");
newRecipe1.instructions.push("Dodaj boczek.");
newRecipe1.instructions.push("Na rozgrzaną patelnię wbij jajaka i mieszaj doprawiając.");
newRecipe1.instructions.push("Podawaj z grzankami. Smacznego!");


// #####/\#####################################################
// ####/||\#### ROBOCZY KOD DO USUNIĘCIA NA PRODUKCJI #########
// #####||#####################################################


document.addEventListener("DOMContentLoaded", function () {

    const recipesTable = document.getElementById('recipesTable');

    // const allRecipes = JSON.parse(localStorage.getItem('allRecipes'));
    const allRecipes = allRecipies; //to trzeba przełączyć na powyższe jak localstorage recipies beda

    const newRow = function (obj) { //funkcja tworząca wiersz listy z zawartością, na podstawie obiektu recipe
        const row = document.createElement('DIV');
        row.classList.add('list__row', 'list__row--recipies');

        const rowArray = [];

        for (let i = 0; i < 4; i++) {
            const rowElement = document.createElement('DIV');
            rowArray.push(rowElement);
        }

        rowArray[0].innerText = obj.id;
        rowArray[1].innerText = obj.title;
        rowArray[2].innerText = obj.description;
        rowArray[3].innerHTML = `
                <label for="${obj.id}_edit" class="hidden-label">Edytuj przepis</label>
                <button class="btn btn--fontawesome far fa-edit" id="${obj.id}_edit" title="Edytuj przepis"></button>
                <label for="${obj.id}_delete" class="hidden-label">Usuń przepis</label>
                <button class="btn btn--fontawesome far fa-trash-alt" id="${obj.id}_delete" title="Usuń przepis"></button>
        `;

        for (const el of rowArray) {
            row.appendChild(el);
        }

        return row;
    };


    const tableInnerHTML = document.createDocumentFragment();


    if (typeof allRecipes === 'undefined' || allRecipes === null || allRecipes === []) {
        const div = document.createElement('DIV');

        div.classList.add('no-recipe-warn');

        div.innerHTML = "Nie masz jeszcze zapisanych żadnych przepisów.<br>Dodaj je klikając w zielony przycisk z prawej strony na górze.";

        tableInnerHTML.appendChild(div);

    } else {

        for (const el of allRecipes) {
            tableInnerHTML.appendChild(newRow(el));
        }

    }

    recipesTable.appendChild(tableInnerHTML);

});