// option 02
function makeRed() {
  document.body.style.backgroundColor = "red";
}
// option 02
function makePink() {
  document.body.style.backgroundColor = "pink";
  document.body.style.color = "white";
}
function makeGray() {
  document.body.style.backgroundColor = "gray";
}

// option 03
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = makePurple;
function makePurple() {
  document.body.style.backgroundColor = "purple";
}

const makeGreenButton = document.getElementById("make-green");
makeGreenButton.onclick = makeGreen;
function makeGreen() {
  document.body.style.backgroundColor = "green";
}

// option 04
const OrangeButton = document.getElementById("make-orange");
OrangeButton.addEventListener("click", makeOrange);

function makeOrange() {
  document.body.style.backgroundColor = "orange";
}
// option 04
const makeSolidButton = document.getElementById("make-solid");
makeSolidButton.addEventListener("click", function makesolid() {
  document.body.style.backgroundColor = "green";
});


// option 4 final
