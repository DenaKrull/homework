import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

const userDisplay = $('#userDisplay');
const postDisplay = $('#postDisplay');
const homeButton = $('#homeButton');


async function getData(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`${response.statusText}`);
    }
    const data = await response.json()
    return data;
  } catch (e) {
    console.log(e)
  }
}

async function getUser() {
  const data = await getData('https://jsonplaceholder.typicode.com/users')
  console.log('users', data);
  const usersArray = data.map(user => ({ id: user.id, name: user.name, website: user.website, companyInfo: user.company }));
  data.forEach(user => {
    const userDiv = document.createElement('div')
    userDiv.className = 'userDetails';
    userDiv.innerHTML = `
    <div class="card">
    <div class="card-body">
      <h4>${user.name}</h4>
      <p> <a href="${user.website}">${user.website}</a></p>
      <h7>${user.company.name}</h7>
      <div>${user.company.catchPhrase}</div>
      <div>${user.company.bs}</div> 
      </div>    
      <button class="getUserPosts btn btn-outline-secondary" id='${user.id}' type="button">
          Show Posts
          </button>
      </div>  
      </div>
    `;
    userDisplay.append(userDiv);
  });

  $('.getUserPosts').click(function (e) {
    console.log('button clicked');
    userDisplay.slideDown('slow');
    getPosts(this.id);
    userDisplay.hide();
  });
}

async function getPosts(userId) {
  const data = await getData(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  data.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `
   
    <div class="card">
        <div>${post.title}</div>
        <div>${post.body}</div>
      <button class="getUserComments btn btn-outline-secondary" id='${post.id}' type="button">
      Show Comments
      
      
      </button>
    </div>

    `;
    postDisplay.append(postDiv);
  });
  $('.getUserComments').click(function (e) {
    console.log('button clicked');
    getComments(this.id);
     postDisplay.hide();
    $('.getUserComments').innerHTML = 'Hide Comments';
  });
  console.log('posts', data);
}

async function getComments(postId) {
  const data = await getData(`https://jsonplaceholder.typicode.com/comments?postId=${postId} `)
  data.forEach(comment => {
    const commentDiv = document.createElement('div');
    commentDiv.innerHTML = `
    <div class="accordion" id="accordionExample">
    <div class="accordion-item">
    <div id="collapseTwo" class="accordion-collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div>${comment.name}</div>
        <div>${comment.email}</div>
        <div>${comment.body}</div>
      </div>
    </div>
  </div> </div>
  </div>
    `;
    document.body.appendChild(commentDiv);

    console.log('comments', data);
  });
}



getUser();


homeButton.click(function (e) {
  location.reload();

});

