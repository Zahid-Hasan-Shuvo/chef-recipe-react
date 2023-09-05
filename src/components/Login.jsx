import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const Login = () => {

  const [error, setError] =useState('')
  
  const auth = getAuth(app)
  const googleProvider =new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const handleGoogle =()=>{
    signInWithPopup(auth, googleProvider)
    .then(result=>{
      const user =result.user;
      console.log(user);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  const handleGithub=()=>{
    signInWithPopup(auth, githubProvider)
    .then(result=>{
      const user =result.user;
      console.log(user);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      
       setError('')
       
       
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message)
       
        form.reset()

        
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  ">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <h1 className="font-bold text-center text-3xl">Please Login</h1>
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
                type={show ? "text" : "password"}
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <p onClick={() => setShow(!show)}>
                <small>
                  {show ? (
                    <span>hide password</span>
                  ) : (
                    <span>Show password</span>
                  )}
                </small>
              </p>

              <p className="text-center">
                <Link>
                  {" "}
                  <a href="#" className=" label-text-alt link link-hover ">
                    forgot password?
                  </a>
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary ">Login</button>
            </div>

            <div className="text-center">
              <h3>Or log in with</h3>
             
            <div className="flex text-center pt-5 space-between ">
            <FaGoogle onClick={handleGoogle} className="ml-20 "  />
              <FaGithub onClick={handleGithub} className="ml-5 " />
           
             </div>
            </div>
          </form>
          <p className="text-center">
            <Link to="/register">
              {" "}
              <a href="#" className=" label-text-alt link link-hover">
                new to website? Register
              </a>
            </Link>
          </p>
          
          <small className="text-red-900 text-center">{error}</small>
        
       
        </div>
        
      </div>
      
    </div>
   
  );
};

export default Login;
