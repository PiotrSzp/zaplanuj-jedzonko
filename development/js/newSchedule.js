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

    const allInputDivs = document.querySelectorAll(".table__cell");
    const saveSchedBtn = document.querySelector("#saveSchedBtn");
    const schedName = document.querySelector("#schedName");
    const schedDescription = document.querySelector("#schedDescription");
    const schedWeekNo = document.querySelector("#schedWeekNo");


    const allRecipes = JSON.parse(localStorage.getItem('allRecipies'));
    // const allRecipes = allRecipies; //to trzeba przełączyć na powyższe jak localstorage recipies beda
    console.log(allRecipes);
    let allScheds = [];

    let day = 1;
    let meal = 1;
    const days = ['poniedziałek', 'wtorek', 'środę', 'czwartek', 'piątek', 'sobotę', 'niedzielę'];
    const meals = ['śniadanie', 'drugie śniadanie', 'zupę', 'drugie danie', 'kolację'];

    function render() {
        for (const element of allInputDivs) {
            element.innerHTML = '';
            const divInnerHtml = document.createDocumentFragment();
            const selectInnerHtml = document.createDocumentFragment();
            const forNameId = `day${day}__meal${meal}`;
            const inputLabel = document.createElement('LABEL');
            const inputSelect = document.createElement('SELECT');
            const firstOption = document.createElement('OPTION');

            inputLabel.htmlFor = forNameId;
            inputLabel.classList.add('hidden-label');
            inputLabel.innerText = `Wybierz ${meals[meal - 1]} na ${days[day - 1]}`;

            divInnerHtml.appendChild(inputLabel);
            inputSelect.id = forNameId;

            inputSelect.name = forNameId;

            firstOption.setAttribute('selected', true);
            firstOption.setAttribute('disabled', true);
            firstOption.setAttribute('hidden', true);
            firstOption.innerText = "Wybierz przepis";
            firstOption.value = "error";
            selectInnerHtml.appendChild(firstOption);

            for (const recipe of allRecipes) {
                const nthOption = document.createElement('OPTION');
                // nthOption.value = recipe.id;
                nthOption.value = recipe.title;
                nthOption.innerText = recipe.title;
                selectInnerHtml.appendChild(nthOption);
            }

            inputSelect.appendChild(selectInnerHtml);

            divInnerHtml.appendChild(inputSelect);

            element.appendChild(divInnerHtml);

            meal >= meals.length ? day++ : day;
            meal >= meals.length ? meal = 1 : meal++;

        }
    }

    render();


    // =======================================||======================
    // ====== DEFINICJE FUNKCJI LOKALNYCH ===\||/=====================
    // =======================================\/======================

    function Schedule(id, weekNumber, title, description) {
        this.id = id; // id planu
        this.title = title; // nazwa planu
        this.description = description; // opis planu
        this.weekNumber = weekNumber; // numer tygodnia do którego przypisany jest plan
        this.monday = []; // plan na poniedzialek
        this.tuesday = []; // plan na wtorek
        this.wednesday = []; // plan na środę
        this.thursday = []; // plan na czwartek
        this.friday = []; // plan na piątek
        this.saturday = []; // plan na sobotę
        this.sunday = []; // plan na niedzielę
    }

    Schedule.prototype.saveToLocalStorage = function () {
        dataFromLocalStorage = localStorage.getItem('allScheds');
        if (dataFromLocalStorage !== null) {
            allScheds = JSON.parse(dataFromLocalStorage);
            allScheds.push(this);
            localStorage.setItem('allScheds', JSON.stringify(allScheds))
        } else {
            allScheds.push(this);
            localStorage.setItem('allScheds', JSON.stringify(allScheds))
        }
    };

    const saveBtnEvent = function (e) {
        const allSelects = document.querySelectorAll(".table__cell select");

        e.preventDefault();
        dataFromLocalStorage = localStorage.getItem('allScheds');
        if (dataFromLocalStorage !== null) {
            allScheds = JSON.parse(dataFromLocalStorage);
        }

        console.log(schedDescription.value);

        const newSched = new Schedule(allScheds.length + 1, schedWeekNo.value, schedName.value, schedDescription.value);

        let wasError = false;

        for (const el of allSelects) {
            if (el.value === 'error') {
                el.classList.add('error');
                wasError = true;
            } else {
                el.classList.remove('error')
            }
        }

        if (wasError) {
            return;
        }

        for (const el of allSelects) {
            if (el.parentElement.classList.contains('mon')) {
                newSched.monday.push(el.value);
            } else if (el.parentElement.classList.contains('tue')) {
                newSched.tuesday.push(el.value);
            } else if (el.parentElement.classList.contains('wed')) {
                newSched.wednesday.push(el.value);
            } else if (el.parentElement.classList.contains('thu')) {
                newSched.thursday.push(el.value);
            } else if (el.parentElement.classList.contains('fri')) {
                newSched.friday.push(el.value);
            } else if (el.parentElement.classList.contains('sat')) {
                newSched.saturday.push(el.value);
            } else if (el.parentElement.classList.contains('sun')) {
                newSched.sunday.push(el.value);
            }
        }

        newSched.saveToLocalStorage();

        render();
    };

    saveSchedBtn.addEventListener('click', saveBtnEvent);

});