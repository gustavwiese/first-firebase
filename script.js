"use strict";

const endpoint = "https://first-firebase-21c4d-default-rtdb.europe-west1.firebasedatabase.app/";

window.addEventListener("load", start);

function start() {
  console.log("JavaScript Kører");
  getPosts();
}

async function getPosts() {
  const response = await fetch(`${endpoint}/posts.json`);
  const data = await response.json();
  console.log(data);
}


