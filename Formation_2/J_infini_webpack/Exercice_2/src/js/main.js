const container = document.querySelector(".container");

fetch("http://localhost:4000/pokemons")
  .then((response) => response.json())
  .then((data) => {
    // Clear container
    container.innerHTML = "";

    data.forEach((item) => {
      // Create card container
      const card = document.createElement("div");
      card.classList.add("card-category");

      // Create card image
      const cardImage = document.createElement("div");
      cardImage.classList.add("card-image");
      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.name;
      cardImage.appendChild(image);

      // Create card description
      const cardDescription = document.createElement("div");
      cardDescription.classList.add("card-description");
      cardDescription.classList.add(item.type.toLowerCase());

      // Create card title
      const title = document.createElement("h2");
      title.textContent = item.name;

      // Create card icon
      const icon = document.createElement("i");
      icon.classList.add("fa-solid", `fa-${item.icon}`);

      // Create card type
      const type = document.createElement("h3");
      type.textContent = item.type;

      // Create "Voir relations" button
      const button = document.createElement("a");
      button.classList.add("btn-card");
      button.textContent = "Voir relations";
      button.href = item.relations;

      cardDescription.appendChild(title);
      cardDescription.appendChild(icon);
      cardDescription.appendChild(type);
      cardDescription.appendChild(button);

      card.appendChild(cardImage);
      card.appendChild(cardDescription);
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });
