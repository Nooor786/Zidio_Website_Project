import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from 'react-avatar';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {

  const linkClass = ({ isActive }) =>
    isActive ? "hover:text-red-400 border-b-[2.75px] border-red-400 py-1.5" : "hover:text-red-400 py-1.5"

  const [user, setuser] = useState()
  const [isLoggedIn, setisLoggedIn] = useState(null)
  const [error, setError] = useState('')


  const fetchUser = async () => {
    let a = await fetch('http://localhost:3000' + '/fetchUser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem('userId')
      }),
    })
    let data = await a.json()

    if (data.success == true) {

      setuser(data.user)
    }
    else {
      setError(data.message)
    }
  }

  const logout = async () => {
    let a = await fetch('http://localhost:3000' + '/fetchUser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem('userId')
      }),
    })
    let data = await a.json()

    if (data.success == true) {

      toast.success('Logout Successful')
      localStorage.removeItem('userId')
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('token')
    }
    else {
      setError(data.message)
    }
  }

  const setuserlog = () => {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      setisLoggedIn(true)
      console.log(true)
    }
    else {
      setisLoggedIn(false)
      console.log(false)

    }
  }

  useEffect(() => {
    fetchUser()
    setuserlog()
  }, [user, isLoggedIn])



  return (
    <header className=' sticky top-0 z-30'>
      <nav className="bg-white text-red py-5 flex items-center gap-7 px-10">
        <div className="container mx-auto flex justify-between items-center   ">
          <div>
            <div className=' w-36'>
              <div className=' bg-white'>
                <NavLink to='/'><img src='./images/zidio.png' /></NavLink>
              </div>
            </div>
          </div>
          <ul className="flex space-x-6 text-[16px] font-semibold">
            <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
            <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
            <li><NavLink to="/JobsPage" className={linkClass}>Careers</NavLink></li>
            <li><NavLink to="/Services" className={linkClass}>Services</NavLink></li>
            <li><NavLink to="/Contact" className={linkClass}>Contact</NavLink></li>
          </ul>
        </div>

        {/* { isLoggedIn == false &&
          
        } */}

        {isLoggedIn ? <div className=' flex  justify-between  items-center gap-3 '>
          <div className=' md:block hidden cursor-pointer'><Avatar name={user ? user.name : ''} size="35" round="50%" /></div>
          <button onClick={logout} className=' bg-[#3e4095] rounded-full border-0 px-2.5 py-1.5 '>
            <img src='./logout.svg' alt='log' className=' w-6 h-6' />
          </button>
        </div> : <button className=' bg-[#3e4095] px-2.5 py-1 text-white hover:bg-[#4e509b] rounded-lg'><NavLink to='/login'>Login</NavLink></button> }

      </nav>
    </header>
  );
};

export default Navbar;


