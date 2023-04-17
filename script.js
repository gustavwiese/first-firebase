"use strict";

const endpoint = "https://first-firebase-21c4d-default-rtdb.europe-west1.firebasedatabase.app/";

window.addEventListener("load", start);

async function start() {
  console.log("JavaScript is running!🥳");
  const data = await getPosts();
  for (const object in data) displayPosts(data[object]);
}

async function getPosts() {
  const response = await fetch(`${endpoint}/posts.json`);
  const data = await response.json();
  const posts = preparePostData(data);
  console.log(posts);
  return posts;
}

function preparePostData(dataObject) {
  const postArray = [];
  for (const key in dataObject) {
    const post = dataObject[key];
    post.id = key;
    postArray.push(post);
  }
  return postArray;
}

function displayPosts(element) {
  const htmlObject = /*html*/ `
  <div>
  <h2>${element.title}</h2>
  <img src="${element.image}">
  </div>
  `;
  document.querySelector("#posts").insertAdjacentHTML("beforeend", htmlObject);
}
