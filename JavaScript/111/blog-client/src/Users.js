import React from 'react'

export default function Users() {
  return (
    <div>
      <a href="/">login</a> |
      <a href="/logout">logout</a> |
      <a href="/admin">admin </a>



      <form method="POST" action="register">
        <input type='text' name='username' placeholder="username" />
        <input type='password' name='password' placeholder="password" />
        <button>login</button>
      </form>

      
    </div>
  )



}
