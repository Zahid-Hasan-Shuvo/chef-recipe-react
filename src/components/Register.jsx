import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const handleRegister=(event)=>{
        event.preventDefault();

        const form= event.target;
        const name= form.name.value

        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password, name);
       
        }

  return (
    <div className="hero min-h-screen bg-base-200">
          
    <div className="hero-content  ">
    
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
      
        <form onSubmit={ handleRegister} className="card-body">
        <h1 className='font-bold text-center text-3xl'>Please Register</h1>
          <div className="form-control">
         
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' required placeholder="name" className="input input-bordered" />
          </div>
          <div className="form-control">
         
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
            <label className="label">
             <Link to='/login'> <a href="#" className="label-text-alt link link-hover">Already have an account?</a></Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register