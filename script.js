//bouton 
var btn_start = document.getElementById("start");
var btn_reset = document.getElementById("reset");
var btn_check = document.getElementById("check");
var btn_medium = document.getElementById("medium");
var btn_hard = document.getElementById("hard");
var btn_noob = document.getElementById("noob");



// div qui reçois 
var main_div = document.getElementById("main-div");

// les infos tentatives / trop haut / trop bas 
var guess_box = document.getElementById("guess-box");
var all_guesses = document.getElementById("all-guesses");
var high_or_low = document.getElementById("high-or-low");

// variable utilisé pour faire les chiffres aléatoirement 
var random_num = Math.floor(Math.random()*10) +1;

// le conteur d'essai
var count_guess = 1;

// apparaitre la div sur le coté 
function start(){
    main_div.style.visibility = "visible";
}
function checkGuess(){
    var your_guess = Number(guess_box.value);
    if(count_guess <= 2){
        if(your_guess < random_num){
            all_guesses.textContent += your_guess + " ";
            high_or_low.innerHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">C'est</h5>
              <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg></p>
            </div>
          </div>`;
            count_guess++;
             guess_box.value = "";
        }
        else if(your_guess > random_num){
            all_guesses.textContent += your_guess + " ";
            high_or_low.innerHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">C'est</h5>
              <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg></p>
            </div>
          </div>`;
            count_guess++;
             guess_box.value = "";
        }
        else{
            all_guesses.textContent += your_guess + " ";
            high_or_low.innerHTML = `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">C'est</h5>
              <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
              <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
            </svg></p>
            </div>
          </div>`;
            count_guess++;
            guess_box.value = "";
            gameOver();
        }
    }
    else{
        all_guesses.textContent += your_guess + " ";
        high_or_low.innerHTML += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Retente ta chance</h5>
          <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
        </svg></p>
        </div>
      </div>`;
        guess_box.value = "";
        gameOver();
    }
}

function gameOver(){
    btn_check.disabled = true;
    guess_box.disabled = true;
}