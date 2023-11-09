function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function (a, b) {
        console.log(a.score, b.score);
    });
}

highscores.forEach(function (score) {
    var liOption = document.createElement("li");
    liOption.textContent = score.initials + " - " + score.score;

    var olEl = document.getElementById("highscores");
    olEl.appendChild(liOption);
});

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
document.getElementById("clear").onclick = clearHighscores;

console.log(Highscores);

