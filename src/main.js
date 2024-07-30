const ratingButtons = document.getElementsByClassName("ratingsButtons");
const outputNum = document.getElementById("outputNum");
const submitButton = document.querySelector("button");
const beforeContainer = document.getElementById("beforeCard");
const afterContainer = document.getElementById("afterCard");

/*----------------------------------------------------------------------------------------------------------------
Functions
----------------------------------------------------------------------------------------------------------------*/

function highlightActiveRating(event) {
  for (let i = 0; i < ratingButtons.length; i++) {
    ratingButtons[i].classList.remove("bg-[#FC7612]");
  }
  event.target.classList.remove("hover:bg-white");
  event.target.classList.add("bg-[#FC7612]");

  let ratingLevel = event.target.innerHTML;
  console.log(ratingLevel);

  outputNum.innerHTML = ratingLevel;
}

function submitFunction() {
  beforeContainer.classList.toggle("hidden");
  afterContainer.classList.toggle("hidden");
}

/*----------------------------------------------------------------------------------------------------------------
Event Listeners
----------------------------------------------------------------------------------------------------------------*/

for (i = 0; i < ratingButtons.length; i++) {
  ratingButtons[i].addEventListener("click", highlightActiveRating);
}

submitButton.addEventListener("click", submitFunction);
