let homeScore  = 0
let guestScore = 0
function homeAdd1(){
   homeScore += 1
    document.getElementById("home-score").textContent = homeScore
}
function homeAdd2(){
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore
}
function homeAdd3(){
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore
}
function guestAdd1(){
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore
}
function guestAdd2(){
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore
}
function guestAdd3(){
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore
}
function reset(){
    console.log("reset")
    homeScore = 0
    guestScore = 0
    document.getElementById("home-score").textContent = homeScore
    document.getElementById("guest-score").textContent = guestScore
}
