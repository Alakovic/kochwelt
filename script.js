function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/meoqqgnj", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}


function updateIngredients(){
    const servings=parseInt(document.getElementById('servings').value);
    if(isNaN(servings)||servings<1 ||servings>10){
        alert("Geben Sie eine gültige Anzahl an Portionen ein (zwischen 1-10).");
        return;
    }

    //Check what the id is on the <body> to select the appropriate ingredients
    const pageId= document.body.id;

    if (pageId === 'recipe1') {
        recipe1(servings);
    } else if (pageId === 'recipe2') {
        recipe2(servings);
    } else if (pageId === 'recipe3') {
        recipe3(servings);
    }

}

function recipe1(servings){
    document.getElementById('ingredient1').innerText = (400 * servings) + ' g Hänchenbrustfilet';
    document.getElementById('ingredient2').innerText = (1 * servings) + ' rote Paprikaschote';
    document.getElementById('ingredient3').innerText = (2 * servings) + ' Tomaten';
    document.getElementById('ingredient4').innerText = (1 * servings) + ' Knoblauchzehe';
    document.getElementById('ingredient5').innerText = (1 * servings) + ' EL Olivenöl';
    document.getElementById('ingredient6').innerText = (250 * servings) + ' ml Sahne zum Kochen';
    document.getElementById('ingredient7').innerText = (2 * servings) + ' EL Tomatenmark';
    document.getElementById('ingredient8').innerText = (1 * servings) + ' TL Gemüsebrühe';
    document.getElementById('ingredient9').innerText = (2 * servings) + ' EL gehacktes Basilikum';
}

function recipe2(servings){
    document.getElementById('ingredient1').innerText = (200 * servings) + ' g Tortellini';
    document.getElementById('ingredient2').innerText = (50 * servings) + ' g Bohnen, grün, halbiert';
    document.getElementById('ingredient3').innerText = (100 * servings) + ' g Brokkoliröschen';
    document.getElementById('ingredient4').innerText = (0.5 * servings) + ' Porreestange';
    document.getElementById('ingredient5').innerText = (50 * servings) + ' g Chamignons';
    document.getElementById('ingredient6').innerText = (1 * servings) + ' Knoblauchzehen, gehackt';
    document.getElementById('ingredient7').innerText = (0.5 * servings) + ' EL Gemüsebrühpulver';
    document.getElementById('ingredient8').innerText = (75 * servings) + ' ml Pflanzensahne';
    document.getElementById('ingredient9').innerText = (3 * servings) + ' Cocktailtomaten, halbiert';
}

function recipe3 (servings){
    document.getElementById('ingredient1').innerText = (120 * servings) + ' g Pasta, lang und dünn';
    document.getElementById('ingredient2').innerText = (50 * servings) + ' g Pancetta, Guanciale oder roher italienischer Schinken';
    document.getElementById('ingredient3').innerText = (1 * servings) + ' Ei(er)';
    document.getElementById('ingredient4').innerText = (20 * servings) + ' g Parmesan oder Grana padano, frisch gerieben';
    document.getElementById('ingredient5').innerText = (20 * servings) + ' g Pecorino romano, frisch gerieben';
    document.getElementById('ingredient6').innerText = (250 * servings) + ' ml Sahne zum Kochen';
}


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }