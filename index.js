let next_player = "O";
let initialized = false;

function start_game(){
    document.getElementById("start_game_container").style.display = "none";
    play_game();
}

const elements = document.querySelectorAll(".tic");

function play_game() {
    console.log("Play game");
    if(!initialized){
        elements.forEach((tic) => {
            tic.addEventListener("click", function () {
                if(tic.innerText.length !== 0) return;
                put_sign(tic);
            })
        });
        initialized = true;
    }
}
function put_sign(tic) {
    tic.innerText = next_player;
    check_win(next_player);
    if(next_player === "O") next_player = "X";
    else if(next_player === "X") next_player = "O";
}

function check_win(next_player) {
    for (let i = 0; i < 3; i++) {
        let wins_row = 0;
        let wins_col = 0;
        for (let j = 0; j < 3; j++) {
            if (elements[i * 3 + j].innerText === next_player) wins_row++;
            if (elements[j * 3 + i].innerText === next_player) wins_col++;
        }
        if (wins_row === 3 || wins_col === 3) end_game(next_player);
    }
    if (
        elements[0].innerText === next_player &&
        elements[4].innerText === next_player &&
        elements[8].innerText === next_player
    ) end_game(next_player);
    if (
        elements[2].innerText === next_player &&
        elements[4].innerText === next_player &&
        elements[6].innerText === next_player
    ) end_game(next_player);
}

function end_game(next_player) {
    const end = document.getElementById("start_game_container");
    end.style.display = "block";
    let button = document.getElementById("start_game");
    button.textContent = "Restart";
}
function restart() {
    elements.forEach((tic) => {
        tic.innerText = '';
    });
    start_game();
}



