// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    Object.values(response.data.articles.bootstrap).forEach((element) => {
      console.log(element);
      cardMaker(element);
    });
    Object.values(response.data.articles.javascript).forEach((element) => {
      //   console.log(element);
      cardMaker(element);
    });
    Object.values(response.data.articles.jquery).forEach((element) => {
      //   console.log(element);
      cardMaker(element);
    });
    Object.values(response.data.articles.node).forEach((element) => {
      //   console.log(element);
      cardMaker(element);
    });
    Object.values(response.data.articles.technology).forEach((element) => {
      //   console.log(element);
      cardMaker(element);
    });
  })
  .catch((error) => {
    console.log(error);
  }, []);

const cardContainer = document.querySelector(".cards-container");

function cardMaker(dataInput) {
  const cardDiv = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthorClass = document.createElement("div");
  const cardAuthorName = document.createElement("span");
  const cardContainerIMG = document.createElement("div");
  const cardImage = document.createElement("img");

  cardContainer.appendChild(cardDiv);
  cardDiv.appendChild(cardHeadline);
  cardDiv.appendChild(cardAuthorClass);
  cardAuthorClass.appendChild(cardContainerIMG);
  cardContainerIMG.appendChild(cardImage);
  cardAuthorClass.appendChild(cardAuthorName);

  cardDiv.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthorClass.classList.add("author");
  cardContainerIMG.classList.add("img-container");

  cardAuthorName.textContent = dataInput.authorName;
  cardHeadline.textContent = dataInput.headline;
  cardImage.src = dataInput.authorPhoto;

  return cardDiv;
}

console.log(cardMaker());
