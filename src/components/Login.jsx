import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

 const handleLogin=(event)=>{
 event.preventDefault();
 const form= event.target;
 const email=form.email.value;
 const password=form.password.value;
 console.log(email,password);

 }

  return (

    <div className="hero min-h-screen bg-base-200">
          
  <div className="hero-content  ">
  
    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
    
      <form onSubmit={ handleLogin} className="card-body">
      
        <div className="form-control">
        <h1 className='font-bold text-center text-3xl'>Please Login</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' required placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' required placeholder="password" className="input input-bordered" />
          <p><Link  > <a href='#' className=" label-text-alt link link-hover">forgot password?</a></Link></p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-center'><Link to='/register' > <a href='#' className=" label-text-alt link link-hover">new to website? Register</a></Link></p>
    </div>
  </div>
</div>
  )
}

export default Login