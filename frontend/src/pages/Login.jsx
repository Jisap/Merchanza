import React, { useState } from 'react'

const Login = () => {
  
  const [state, setstate] = useState("Sign Up");
  
  return (
    <section>
      <div>
        <h3>{state}</h3>
        <div>
          {state === "Sign Up" 
            ? <input 
                name="username" 
                type="text" 
                placeholder="Your Name"
                className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
              />
            : "" 
          }
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
          />
          <input
            name="password"
            type="password"
            placeholder="Your password"
            className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
          />
        </div>
        <button className="btn-dark rounded-xl my-5 !py-1">Continue</button>
      
        {state === "Sign Up" 
          ? <p>Alreadt have an account ? 
              <span onClick={() => setstate("Login")} className="text-secondary underline cursor-pointer">Login</span>
            </p> 
          : <p className="text-black font-bold">Create an account ? 
              <span onClick={() => setstate("Sign Up")} className="text-secondary underline cursor-pointer">Click here</span>
            </p>
        }
      
        <div>
          <input type="checkbox" name="" id="" />
          <p>By coninuing, i agree the terms of use & privacy policy.</p>
        </div>

      </div>

    </section>
  )
}

export default Login