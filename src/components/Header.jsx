import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Chef-recepi</a>

    <div >
    <Link to='/' className='px-5 '>Home</Link>
    <Link className='px-5 ' to='/register'>Register</Link>
    <Link  className='px-5'to='/login'>Login</Link>
    </div>
    
  </div>
  <div className="flex-none">
    
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

    </div>
  )
}

export default Header