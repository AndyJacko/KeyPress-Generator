const goAhead = document.getElementById("go-ahead");
const notScared = document.getElementById("not-scared");
const no = document.getElementById("no");
const infoContainer = document.getElementById("info-container");
const codeContent = document.getElementById("code");
const keyContent = document.getElementById("key");
const whichContent = document.getElementById("which");
const bigNum = document.getElementById("big-num");

document.addEventListener("keydown", (e) => {
  codeContent.textContent = e.code;

  if (e.code === "Space") {
    keyContent.textContent = "Space";
  } else {
    keyContent.textContent = e.key;
  }

  whichContent.textContent = e.which;

  bigNum.textContent = e.which;

  goAhead.style.display = "none";

  if (e.key === "Escape") {
    no.style.display = "block";
  } else {
    notScared.style.display = "block";
  }

  infoContainer.style.display = "flex";

  setTimeout(() => {
    infoContainer.style.display = "none";
    goAhead.style.display = "block";
    notScared.style.display = "none";
    no.style.display = "none";
    codeContent.textContent = "";
    keyContent.textContent = "";
    whichContent.textContent = "";
    bigNum.textContent = "";
  }, 2000);
});
