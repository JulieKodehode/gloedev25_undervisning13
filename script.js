console.log("Working from menu?");

// menu.html
const pizzaCardContainer = document.querySelector("#pizzaCardContainer");
console.log(pizzaCardContainer);

const pizzaCard = document.createElement("div");
pizzaCard.classList.add("pizzaCard");

const pizzaCardImg = document.createElement("img");
pizzaCardImg.classList.add("pizzaCardImg");
pizzaCardImg.src = "";
pizzaCardImg.alt = "Bildet av pizzaen.";

const pizzaCardTitle = document.createElement("h3");
pizzaCardTitle.classList.add("pizzaCardTitle");
pizzaCardTitle.textContent = "Pizza navn";

const pizzaCardDescription = document.createElement("p");
pizzaCardDescription.classList.add("pizzaCardDescription");
pizzaCardDescription.textContent = "Pizza beskrivelse";

const pizzaCardPrize = document.createElement("p");
pizzaCardPrize.classList.add("pizzaCardPrize");
pizzaCardPrize.textContent = "Pizza pris";

pizzaCard.appendChild(pizzaCardImg);
pizzaCard.appendChild(pizzaCardTitle);
pizzaCard.appendChild(pizzaCardDescription);
pizzaCard.appendChild(pizzaCardPrize);

pizzaCardContainer.appendChild(pizzaCard);
pizzaCardContainer.appendChild(pizzaCard.cloneNode(true));
pizzaCardContainer.appendChild(pizzaCard.cloneNode(true));
console.log(pizzaCardContainer);