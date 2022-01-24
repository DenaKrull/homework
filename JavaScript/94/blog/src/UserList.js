import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserList.css'
import Posts from './Posts';

export default function UserList() {

const [users, setUsers] = useState([]);


  useEffect(() => {

    (async () => {
      try {
        if (!users.length) {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!response.ok) {
            throw new Error(`${response.statusText}`);
          }
          const theUsers = await response.json();
          setUsers(theUsers);
        }

      } catch (e) {
        console.log(e);
      }
    })();
  }, [users]);

  return (
    users.map(userInfo => {
      return (
        <div className="userDetails">
          <div className="card">
            <div className="card-body">
              <div>{userInfo.name}</div>
              <div> <a href={userInfo.website}>{userInfo.website}</a></div>
              <div>{userInfo.company.name}</div>
              <div>{userInfo.company.catchPhrase}</div>
              <div>{userInfo.company.bs}</div>
            </div>
            <button onClick={<Posts />} className="getUserPosts btn btn-outline-secondary" id={userInfo.id} type="button">
              Show Posts
            </button>
          </div>
        </div>
      )
    })

  );
}
