const { json } = require("body-parser");
const URL = "http://localhost:8080";

function handleSubmit(event) {
  event.preventDefault();
  let url = document.getElementById("name").value;
  Client.checkUrl(url);
  postData(`${URL}/resultInfo`, { temp: url });
}

function postData(url = "", data = {}) {
  console.log("post data", data);
  return fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(function (res) {
      let element = document.getElementById("results");
      element.innerHTML = `<strong>Confidence: </strong>${res.confidence}<br>
        <strong>Score tag: </strong>${res.score_tag}<br>
        <strong>Subjectivity: </strong>${res.subjectivity}<br>
        <strong>Irony: </strong>${res.irony}`;
    });
}

export { handleSubmit };
export { postData };
