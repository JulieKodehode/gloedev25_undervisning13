console.log("Working from menu?");

// menu.html
const pizzaCardContainer = document.querySelector("#pizzaCardContainer");
console.log(pizzaCardContainer);

const pizzaCard = document.createElement("div");

const pizzaCardImg = document.createElement("img");
pizzaCardImg.src = "";
pizzaCardImg.alt = "Bildet av pizzaen."

const pizzaCardTitle = document.createElement("h3");
pizzaCardTitle.textContent = "Pizza navn";

const pizzaCardDescription = document.createElement("p");
pizzaCardDescription.textContent = "Pizza beskrivelse"

const pizzaCardPrize = document.createElement("p");
pizzaCardPrize.textContent = "Pizza pris"

pizzaCard.appendChild(pizzaCardImg);
pizzaCard.appendChild(pizzaCardTitle);
pizzaCard.appendChild(pizzaCardDescription);
pizzaCard.appendChild(pizzaCardPrize);

pizzaCardContainer.appendChild(pizzaCard);
pizzaCardContainer.appendChild(pizzaCard);
pizzaCardContainer.appendChild(pizzaCard);
console.log(pizzaCardContainer);