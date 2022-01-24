import React, { Component } from 'react'
import Header from './Header.js';
import UserList from './UserList.js';
import Posts from './Posts.js';
import Comments from './Comments.js';

export default class App extends Component {

  render() {

    return (
      <>
      <Header />
      <UserList />
      
      </>
    )
  }
}
