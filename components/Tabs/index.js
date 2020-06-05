// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then((response) => {
    console.log(response);
    const lambdaData = response.data.topics;
    console.log(lambdaData);

    lambdaData.forEach((element) => {
      tabMaker(element);
    });
  })
  .catch((error) => {
    console.log;
  }, []);

const topicContainer = document.querySelector(".topics");

function tabMaker(tabContent) {
  const tabDiv = document.createElement("div");

  topicContainer.appendChild(tabDiv);

  tabDiv.classList.add("tab");

  tabDiv.textContent = tabContent;
}

console.log(tabMaker());
