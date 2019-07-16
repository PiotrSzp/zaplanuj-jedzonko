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
            console.log(el);
        }
    };

    // ### f-cja (IIFE) sprawdzająca, czy jest zapisane imię i renderująca odpowiednio stronę
    const isNew = function () {
        hideAll();
        if (localStorage.userName === null || localStorage.userName === undefined) {
            nameDisplay.innerText = "Podaj imię w formularzu poniżej";
            newUserDiv.classList.add('main__screen--visible');
        } else {
            dashboardDiv.classList.add('main__screen--visible');
            nameDisplay.innerText = localStorage.userName;
        }
        console.log('lol');
    };
    isNew();


    // ### f-cja zapisująca imię do localstorage i validująca formularz
    const saveName = function (e) {
        e.preventDefault();
        let name = "";
        if (userNameInpt.value !== "") {
            name = userNameInpt.value;
            localStorage.setItem('userName', name);
            isNew();
        } else {
            userNameInpt.style.borderColor = '#ff0000';
            userNameInpt.placeholder = 'Musisz podać imię! Chociaż jedną literkę!';
        }
        console.log('hello');
    };


    // ======================================||=======================
    // ====== DODAWANIE EVENT LISTENERÓW ===\||/======================
    // ======================================\/=======================

    saveNameBtn.addEventListener('click', saveName);






    // ======================================||=======================
    // ====== ROBOCZE - DO USUNIĘCIA POTEM =\||/======================
    // ======================================\/=======================

    // ### f-cja czyszcząca localstorage POMOCNICZA <-- DO USUNIĘCIA
    const xxx = function () {
        localStorage.clear();
        location.reload();
    };

    const clrBtn = document.querySelector("#wyczysc");
    clrBtn.addEventListener('click', xxx)

});

