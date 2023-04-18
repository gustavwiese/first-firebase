"use strict";

const endpoint = "https://first-firebase-21c4d-default-rtdb.europe-west1.firebasedatabase.app/";

window.addEventListener("load", start);

async function start() {
  console.log("JavaScript is running!🥳");
  const data = await getPosts();
  const userData = await getUsers();
  for (const object in data) displayPosts(data[object]);
  for (const user in userData) displayUsers(userData[user]);
}

async function getPosts() {
  const response = await fetch(`${endpoint}/posts.json`);
  const data = await response.json();
  const posts = preparePostData(data);
  console.log(posts);
  return posts;
}
async function getUsers() {
  const response = await fetch(`${endpoint}/users.json`);
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
  <h3>${element.body}</h3>
  <h3>${element.uid}</h3>
  <img src="${element.image}">
  </div>
  `;
  document.querySelector("#posts").insertAdjacentHTML("beforeend", htmlObject);
}

function displayUsers(user) {
  const htmlUser = /*html*/ `
<div>
<h2>${user.name}</h2>
<img src="${user.image}"></img>
<h3>${user.mail}</h3>
<h3>${user.phone}</h3>
<h3>${user.title}</h3>
</div>
`;
  document.querySelector("#users").insertAdjacentHTML("beforeend", htmlUser);
}
