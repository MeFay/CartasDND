const Card = (name, description, image, attributes, speed, size, languages) => {
  const cardsContainer = document.getElementById("my-cards");

  const card = document.createElement("div");
  card.className = "card";

  const cardName = document.createElement("h2");
  cardName.innerHTML = name;
  card.appendChild(cardName);

  const cardDescription = document.createElement("p");
  cardDescription.innerHTML = description;
  card.appendChild(cardDescription);

  const cardImage = document.createElement("img");
  cardImage.src = image;
  card.appendChild(cardImage);

  const cardAttributes = document.createElement("p");
  cardAttributes.innerHTML = attributes;
  card.appendChild(cardAttributes);

  const cardSpeed = document.createElement("p");
  cardSpeed.innerHTML = speed;
  card.appendChild(cardSpeed);

  const cardSize = document.createElement("p");
  cardSize.innerHTML = size;
  card.appendChild(cardSize);

  const cardLanguages = document.createElement("p");
  cardLanguages.innerHTML = languages;
  card.appendChild(cardLanguages);

  cardsContainer.appendChild(card);
};
