// ================================================||=============
// ====== DEFINICJE FUNKCJI DOSTĘPNYCH GLOBALNIE==\||/============
// ================================================\/=============


// ### f-cja czyszcząca displaya wszystkich screenów
const hideAll = function () {
    const mainScreensAll = document.querySelectorAll(".main__screen");
    for (const el of mainScreensAll) {
        el.classList.remove('main__screen--visible');
    }
};


// ### f-cja pokazująca konkretny screen
// (może być wywołana z parametrem lub jako eventListener do buttona zawierającego atrybut data-screenID="ID main__screena do pokazania"
const showThisMainScreen = function (mainScreenID) {

    hideAll();

    let IdToShow = "";

    // sprawdzam czy funkcja dostała parametr ręcznie; jak nie, to przypisuję parametr z buttona do jakiego była przypisana jako event listener
    if (typeof mainScreenID === 'object') { //to sprawdza, czy fcja dostałą event, czy stringa
        mainScreenID.preventDefault();
        IdToShow = "#" + this.dataset.screenId;  // screenId to jest atrybut 'data-screen-id' buttona, ktory ma przekierować na odpowiedni ekran
    } else {
        IdToShow = "#" + mainScreenID;
    }

    const screenToShow = document.querySelector(IdToShow);
    screenToShow.classList.add('main__screen--visible');
};


// ###################################################||############
// ## DOCUMENT.ADDEVENTLISTENER("DOMCONTENTLOADED" ##\||/###########
// ###################################################\/############

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
    const prevWeekBtn = mainContainer.querySelector('#prevWeek');
    const nextWeekBtn = mainContainer.querySelector('#nextWeek');

    const addRecipeBtn = document.querySelector("#addRecipeBtn");



    // =======================================||======================
    // ====== DEFINICJE FUNKCJI LOKALNYCH ===\||/=====================
    // =======================================\/======================

    // // ### f-cja czyszcząca displaya wszystkich screenów  -- fcja przeniesiona do globalnych
    // const hideAll = function () {
    //     for (const el of mainScreensAll) {
    //         el.classList.remove('main__screen--visible');
    //     }
    // };
    //
    //
    // // ### f-cja pokazująca konkretny screen   -- fcja przeniesiona do globalnych
    // // (może być wywołana z parametrem lub jako eventListener do buttona zawierającego atrybut data-screenID="ID main__screena do pokazania"
    // const showThisMainScreen = function (mainScreenID) {
    //     hideAll();
    //
    //     // sprawdzam czy funkcja dostała parametr ręcznie; jak nie, to przypisuję parametr z buttona do jakiego była przypisana jako event listener
    //     let IdToShow = "";
    //     if (typeof mainScreenID === 'object') { //to sprawdza, czy fcja dostałą event, czy stringa
    //         IdToShow = "#" + this.dataset.screenId;  // screenId to jest atrybut 'data-screen-id' buttona, ktory ma przekierować na odpowiedni ekran
    //     } else {
    //         IdToShow = "#" + mainScreenID;
    //     }
    //
    //     const screenToShow = mainContainer.querySelector(IdToShow);
    //     screenToShow.classList.add('main__screen--visible');
    // };


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


    // ###funkcja eventListener przekierowująca stronę na app.html i zapisująca na jaki ekran ma wejść app.html
    // (button musi mieć atrybut 'data-screen-id' równy ID main__screena do pokazania)
    const goToApp = function (e) {
        e.preventDefault();
        const screenToShow = this.dataset.screenId;
        window.sessionStorage.setItem('showScreen', screenToShow);
        window.location = "app.html";
    };


    // ### f-cja sprawdzająca, czy nie nastąpiło przekierowanie z funkcji goToApp
    // z poleceniem zmiany screena i zmieniająca go odpowiednio
    const shouldShowScreen = function () {
        const screenToShow = window.sessionStorage.getItem('showScreen');
        if (screenToShow) {
            showThisMainScreen(screenToShow);
        }
        window.sessionStorage.removeItem('showScreen');
    };

    shouldShowScreen();


    // ======================================||=======================
    // ====== DODAWANIE EVENT LISTENERÓW ===\||/======================
    // ======================================\/=======================


    // ---- na stronie '/app.html' --------
    if (window.location.pathname === "/app.html") {
        saveNameBtn.addEventListener('click', saveName);
    }

    // ---- na stronie '/recipe.html'------
    if (window.location.pathname === "/recipes.html") {
        addRecipeBtn.addEventListener('click', goToApp);
    }


});