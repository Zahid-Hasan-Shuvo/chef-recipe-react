import  { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProviders'

const Header = () => {
  const {user, logOut} =useContext(AuthContext);
  console.log(user);

const handleLogOut =()=>{
logOut()
.then()
.catch()

}

  return (
    <div>
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Chef-recepi</a>

    <div >
    <Link to='/' className='px-5 '>Home</Link>
    <Link to='/blog' className='px-5 '>Blog</Link>
    <Link className='px-5 ' to='/register'>Register</Link>
    <Link className='px-5 ' to='/chef-recepi'>All recepi</Link>
   
{ user ? <> 
  {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar"> */}
        {/* <div className="w-10 rounded-full"> */}
          <span> {user.email } </span>
        {/* </div> */}
      {/* </label> */}
<button onClick={handleLogOut} className='px-5' > signout</button>
 </>:
 <Link className='px-5 ' to='/login'>Login</Link>

}

   
   
       

    </div>
    
  </div>
  
    
  
</div>

    </div>
  )
}

export default Header