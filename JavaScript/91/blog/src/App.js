import React, { Component } from 'react'

export default class App extends Component {

  getBlogPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=2 ')
      const data = await response.json()
      if (!response.ok) {
        throw new Error(`${data.message || response.statusText}`);
      }
      console.log(data);
      this.setState({
        blogPosts: data
      });
    } catch (e) {
      console.log(e)
    }
  }
  render() {

    return (
      <div>

      </div>
    )
  }
}