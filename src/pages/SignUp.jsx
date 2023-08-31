// import React from 'react'

const SignUp = () => {
  return (
    <div>
      <img src="" alt="" />
      <div className="form">
        <div className="field">
            <label htmlFor="">Username</label>
            <input type="text" name="username" id="name" />
        </div>
        <div className="field">
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="email" />
        </div>
        <div className="field">
            <label htmlFor="">Password</label>
            <input type="password" name="password" id="password" />
        </div>
        <div className="field">
            <label htmlFor="">Tel</label>
            <input type="tel" name="tel" id="tel" />
        </div>
        <button>SignUp</button>
        <p>Already have an account? </p> <button><a href="#">Login Up</a></button>
      </div>
    </div>
  )
}

export default SignUp
