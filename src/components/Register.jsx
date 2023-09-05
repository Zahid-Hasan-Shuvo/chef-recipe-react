import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Register = () => {
  const [success, setSuccess] =useState('')
  const [error, setError] =useState('')
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name);

    //validate
    if(!/[a-zA-Z0-9]{6,} /.test(password)){
      setError('enter at least 6 password')
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        
        setSuccess('user has created successfully')
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setSuccess('')
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  ">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="font-bold text-center text-3xl">Please Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label for="avatar">Choose a photo:</label>

              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />

             
           

               
              <label className="label">
                <Link to="/login">
                  {" "}
                  <a href="#" className="label-text-alt link link-hover">
                    Already have an account?
                  </a>
                </Link>
              </label>
            </div>
            <small className=" text-centert text-green-800">{success}</small>
            <small className=" text-centert text-red-800">{error}</small>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
