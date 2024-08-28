import React from 'react'

const AuthForm = () => {
  return (
    <div>AuthForm

      <form>
        <div>
          <label>Email:</label>
          <input type='email'/>
        </div>
        <div>
          <label>PassWord:</label>
          <input type='password'/>
        </div>
        <button>
          Submit
        </button>

      </form>
    </div>
  )
}

export default AuthForm