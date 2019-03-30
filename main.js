const cards = document.querySelectorAll(".card");

console.log(cards);

function flipCard() {
  this.clasList.toggle("flip");
  console.log(this);
}

cards.forEach(card => card.addEventListener("click", flipCard));
