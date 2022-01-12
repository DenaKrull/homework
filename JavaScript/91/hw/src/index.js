import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// const UserName = document.getElementById('userName');
// const website = document.getElementById('website');
// const company =document.getElementById('company');
// const catchPhrase = document.getElementById('catchPhrase');
// const bs = document.getElementById('bs');
const button = document.getElementById('btn');


async function getData(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    if (!response.ok) {
      throw new Error(`${response.statusText}`);
    }
    return data;

  } catch (e) {
    console.log(e)
  }
}

async function getUser() {
  const data = await getData('https://jsonplaceholder.typicode.com/users')

  data.forEach(user => {
    const userDiv = document.createElement('div')
    // UserName.innerHTML = `${user.name}`
    // website.innerHTML = `${user.website}`
    // company.innerHTML = `${user.company.name}`
    // catchPhrase.innerHTML = `${user.company.catchPhrase}`
    // bs.innerHTML = `${user.company.bs}`
    userDiv.classList.add('user')
    userDiv.innerHTML = `
      <h2>${user.name}</h2>
      <div>${user.website}</div>
      <h4>${user.company.name}</h4>
      <div>${user.company.catchPhrase}</div>
      <div>${user.company.bs}</div>
      <button id=${user.id} type="button" class="btn btn-primary btn-sm">Show Posts</button>
    
    `

    document.body.appendChild(userDiv)
    
  })
button.on('click', () => {
  
});
  console.log(data);
}
async function getPosts() {
  const data = await getData('https://jsonplaceholder.typicode.com/posts?userId=4')
  console.log(data);
}
async function getComments() {
  const data = await getData('https://jsonplaceholder.typicode.com/comments?postId=5 ')
  console.log(data);
}

getUser();
getPosts();
getComments();
