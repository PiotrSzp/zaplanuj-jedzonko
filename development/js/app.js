document.addEventListener("DOMContentLoaded", function () {

    // =============================||===============================
    // ====== DEFINICJE ZMIENNYCH =\||/==============================
    // =============================\/===============================

    const mainContainer = document.querySelector(".main-container");
    const mainScreensAll = mainContainer.querySelectorAll(".main__screen");
    const saveNameBtn = mainContainer.querySelector('#saveNameBtn');
    const userNameInpt = mainContainer.querySelector('#userName');
    const newUserDiv = mainContainer.querySelector('#newUser');
    const dashboardDiv = mainContainer.querySelector('#dashboard');
    const addRecipeDiv = mainContainer.querySelector('#addRecipe');
    const addScheduleDiv = mainContainer.querySelector('#addSchedule');
    const nameDisplay = document.getElementById('nameDisplay');


    // =============================||================================
    // ====== DEFINICJE FUNKCJI ===\||/===============================
    // =============================\/================================

    // ### f-cja czyszcząca displaya wszystkich screenów
    const hideAll = function () {
        for (const el of mainScreensAll) {
            el.classList.remove('main__screen--visible');
        }
    };

    // ### f-cja sprawdzająca, czy jest zapisane imię i renderująca odpowiednio stronę
    const isNew = function () {
        if (localStorage.userName === null || localStorage.userName === undefined) {
            nameDisplay.innerHTML = '<a href="../app.html">Podaj imię</a>';
        } else {
            nameDisplay.innerText = localStorage.userName;
        }

        if (window.location.pathname === "/app.html") {
            if (localStorage.userName === null || localStorage.userName === undefined) {
                newUserDiv.classList.add('main__screen--visible');
            } else {
                dashboardDiv.classList.add('main__screen--visible');
            }
        }

    };
    isNew();


    // ### f-cja zapisująca imię do localstorage i validująca formularz
    const saveName = function (e) {
        e.preventDefault();
        let name = "";
        if (userNameInpt.value !== "") {
            name = userNameInpt.value;
            localStorage.setItem('userName', name);
            hideAll();
            isNew();
        } else {
            userNameInpt.style.borderColor = '#ff0000';
            userNameInpt.placeholder = 'Musisz podać imię! Chociaż jedną literkę!';
        }
    };


    // ======================================||=======================
    // ====== DODAWANIE EVENT LISTENERÓW ===\||/======================
    // ======================================\/=======================


    // ---- na stronie '/app.html' --------
    if (window.location.pathname === "/app.html") {
        saveNameBtn.addEventListener('click', saveName);
    }

    // ---- na stronie '/recipe.html'------
    if (window.location.pathname === "/recipe.html") {
        // tutaj kod
    }



    // ======================================||=======================
    // ====== ROBOCZE - DO USUNIĘCIA POTEM =\||/======================
    // ======================================\/=======================

    // ### f-cja czyszcząca localstorage POMOCNICZA <-- DO USUNIĘCIA
    const xxx = function () {
        localStorage.clear();
        location.reload();
    };
    if (window.location.pathname === "/app.html") {
        const clrBtn = document.querySelector("#wyczysc");
        clrBtn.addEventListener('click', xxx)
    }


});



//// TUTAJ SĄ FRAGMENTY KODU KTÓREGO JESZCZE NIE UŻYŁEM 
  /* 
   Metoda `.showInfo()` 
   wyświetlająca w konsoli wszystkie informacje o przepisie */
   Recipe.prototype.showInfo = function() {
    console.warn(this.id, this.title); // wyświetl id oraz tytuł
    console.warn(this.description); // wyświetl opis
    this.ingredients.map(function(elem, i) {
      console.warn(i, elem); // wyświetl każdy element
    })
    this.instructions.map(function(elem, i) {
      console.warn(i, elem); // wyświetl każdy element
    })
  }
  
  /* 
  Metoda `.saveToLocalStorage()` 
  zapisująca do localStorage informacje o przepisie */
  Recipe.prototype.saveToLocalStorage = function() {

    allRecipies;
    /* if(){
        // uzupełnij
      }else{
        // uzupełnij
      } */
  }
  
 
  
  
  // utworzenie kilku przykładowych przepisów 
  /*
  var newRecipe1 = new Recipe(allRecipies.length + 1, "Jajecznica na boczku", "Taką jajecznicę lubie najbardziej ;p ");
  allRecipies.push(newRecipe1); // dodanie przepisu do globalnej tablicy
  var newRecipe2 = new Recipe(allRecipies.length + 1, "Fasolka po bretońsku", "Taka fasolka że kołdrę podnosi!");
  allRecipies.push(newRecipe2);
  var newRecipe3 = new Recipe(allRecipies.length + 1, "Sałatka grecka", "Oryginalna sałatka grecka z pomidora, ogórka, czerwonej cebuli i czarnych oliwek, z oliwą i oregano. ");
  allRecipies.push(newRecipe3);
  */
  // dodawanie składników do przepisu (newRecipe1, allRecipies[0])
  /*
  newRecipe1.ingredients.push("3 jajka"); 
  newRecipe1.ingredients.push("mała cebula"); 
  newRecipe1.ingredients.push("szczypiorek"); 
  newRecipe1.ingredients.push("5 plasterków boczku"); 
  
  newRecipe1.instructions.push("Rozpuść masło na patelni i podgrzej.");
  newRecipe1.instructions.push("Dodaj boczek."); 
  newRecipe1.instructions.push("Na rozgrzaną patelnię wbij jajaka i mieszaj doprawiając."); 
  newRecipe1.instructions.push("Podawaj z grzankami. Smacznego!"); 
  */
  
//-----------------------------------------------------------------------------------
  /*  PRZEPIS 
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
   // przygotowanie globalnej zmiennej przechowującej wszystkie przepisy
  var allRecipies = [];

  const nameRecipes = document.querySelector("#main__recipes-text-name");
  const discRecipes = document.querySelector("#main__recipes-txt-discription");
  ///^ Textarea's jeden z nazwą drugi z opisem raczej widać który to który ;) 

  const indexComponent = document.querySelector("#main__recipes-component");
  const indexInstruction = document.querySelector("#main__recipes-instruction");
  ///^ To są Textarea's z dodawaniem składników i intrukcji

  const addOrderList = document.querySelector(".main__screen_order-list"); 
  const addUnorderList = document.querySelector(".main__screen_unorder-list"); 
  ///^ To są te listy z scrolami w których znajdują się składniki i instrukcja krok po kroku

  const addButtonRecipes = document.querySelector(".main__recipes-button");
  ///^ przycisk Zapisz i zamknij

  const addComponent = document.querySelector(".fa-plus-component");
  const addInstruction = document.querySelector(".fa-plus-instruction");
  ///^ To są przyciski dodające produkt do listy oraz kroki instrukcji

  
////f-cja sprawdzajaca czy cos jest nie pełne (niestety sprawdza tylko nazwę i opis :/)
  const addAllElements = function(e){
      e.preventDefault();
    let emptyElement ="";
    if(addUnorderList.value !== "" &&
        addOrderList.value !== "" &&  
        discRecipes.value !== ""&&
        nameRecipes.value !== ""){
        ///tworzy nowy objekt
            newRecipe = new Recipe(allRecipies.length + 1, nameRecipes.value,
                discRecipes.value);
        ///i iteruje po listach dodajac do objektu    
            for(let el of addOrderList.children){
                newRecipe.ingredients.push(el);
            }

            for(let el of addUnorderList.children){
                newRecipe.instructions.push(el); 
            }
        ///wypycha do globalnej zmiennej przepis   
            allRecipies.push(newRecipe); 
            console.log(newRecipe);

            //!!tutaj przeba dodać funkcję chowającą dodawanie przepisu!!!!!!







    }else{
        console.log("Czegos brakuje!");
    }
  }

 ////f-cja dodająca składniki do listy 
  const saveComponent = function (e) {
    e.preventDefault();
    
    if (indexComponent.value !== "") {
        const el = document.createElement("li");
        el.innerText = indexComponent.value;
        addUnorderList.appendChild(el);
         
    } else {
        indexComponent.placeholder = 'Musisz podać jakiś produkt';
        
    }
  }

  ////f-cja dodająca kroki do listy instrukcji 
    const saveInstruction = function (e) {
        e.preventDefault();
        
        if (indexInstruction.value !== "") {
            const el = document.createElement("li");
            el.innerText = indexInstruction.value;
            addOrderList.appendChild(el);
           
        } else {
            indexInstruction.placeholder = 'Musisz jakąś instrukcję';
            
        }

    console.log('hello');

    }

addComponent.addEventListener('click',saveComponent ); // event dodawania do listy 
addInstruction.addEventListener('click',saveInstruction );// event dodawania do listy
addButtonRecipes.addEventListener('click', addAllElements);//event przyciskania tworzenia objektu

    

    if (window.location.pathname === "/app.html") {
        const clrBtn = document.querySelector("#wyczysc");
        clrBtn.addEventListener('click', xxx)
    }





