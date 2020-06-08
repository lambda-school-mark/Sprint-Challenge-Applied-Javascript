/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container");

function carouselMaker() {
  const carousel = document.createElement("div");
  const buttonLeft = document.createElement("div");
  const buttonRight = document.createElement("div");

  carousel.classList.add("carousel");
  buttonLeft.classList.add("left-button");
  buttonRight.classList.add("right-button");

  let images = [
    "./assets/carousel/mountains.jpeg",
    "./assets/carousel/computer.jpeg",
    "./assets/carousel/turntable.jpeg",
    "./assets/carousel/trees.jpeg",
    "./assets/carousel/turntable.jpeg",
  ];

  const nodeItems = [];

  images.map((imgItem, index) => {
    const image = document.createElement("img");
    image.src = imgItem;
    carousel.appendChild(image);
    nodeItems.push(image);
  });

  console.log(nodeItems);

  carousel.appendChild(buttonLeft);
  carousel.appendChild(buttonRight);

  buttonRight.textContent = ">";
  buttonLeft.textContent = "<";

  carouselContainer.appendChild(carousel);

  nodeItems[0].style.display = "block";

  let currentImg = 0;

  buttonRight.addEventListener("click", (event) => {
    nodeItems[currentImg].style.display = "none";

    const newImg = currentImg + 1;

    if (nodeItems[newImg]) {
      currentImg = newImg;
      nodeItems[newImg].style.display = "block";
    } else {
      currentImg = 0;
      nodeItems[0].style.display = "block";
    }
  });

  buttonLeft.addEventListener("click", (event) => {
    nodeItems[currentImg].style.display = "none";

    const newImg = currentImg - 1;

    if (nodeItems[newImg]) {
      currentImg = newImg;
      nodeItems[newImg].style.display = "block";
    } else {
      currentImg = nodeItems.length - 1;
      nodeItems[nodeItems.length - 1].style.display = "block";
    }
  });

  return carousel;
}

carouselMaker();
