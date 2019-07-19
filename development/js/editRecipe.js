document.addEventListener("DOMContentLoaded", function () {
    var url_string = window.location.href
    var url = new URL(url_string);
    var recipeId = url.searchParams.get("id");
    var recipe = JSON.parse(localStorage.getItem('przepis_' + recipeId))

    document.querySelector('#main__recipes-text-name').value = recipe.title
    document.querySelector('#main__recipes-txt-discription').value = recipe.description

    
    debugger;


    

});
