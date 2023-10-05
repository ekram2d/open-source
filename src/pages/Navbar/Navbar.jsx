import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import logo from '../../../../assets/publichome/logo.png';
import { useContext } from 'react';

// import Loader from '../../../Componets/Loader';
import { IoIosArrowDown } from "react-icons/io";
// import useAdmin from '../../../CustomHooks/UseAdmin';
// import Swal from 'sweetalert2';
// import useUrl from '../../../CustomHooks/URL/UseUrl';


function Navbar() {
      // const [url] = useUrl()
      const [menuOpen, setMenuOpen] = useState(false);
      // const { user, loading } = useContext(AuthContext)

      const navigate = useNavigate();

      const user = {};
      const [orderdata, setOrderData] = useState([]);

      const [open, setOpen] = useState('Open');


      // if (loading) {
      //       return <Loader />
      // }







      const toggleMenu = () => {
            setMenuOpen(!menuOpen);
      };


      return (
            <header className={` fixed w-[90%] px-[10%] h-[100px]  mb-16   mx-auto z-10 top-0 bg-white shadow-lg rounded-2xl ${menuOpen ? 'menu-open' : 'menu-close'}`}>
                  <div className=" mx-auto py-8">
                        <div className="container mx-auto flex justify-between">
                              {/* Company Logo */}
                              <Link to="/">
                                    <h1 className=" font-bold text-lg ">
                                          Restuarent
                                    </h1>
                              </Link>

                              {/* Mobile Menu Button */}
                              <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
                                    {menuOpen ? (
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                          >
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M6 18L18 6M6 6l12 12"
                                                />
                                          </svg>
                                    ) : (
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                          >
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M4 6h16M4 12h16M4 18h16"
                                                />
                                          </svg>
                                    )}
                              </button>

                              {/* Mobile Menu (hidden by default) */}

                              {/* Desktop Menu */}
                              <nav className="hidden lg:flex items-center space-x-10">

                                    <ul className="flex space-x-4 ">
                                          <li><NavLink className={'text-lg '} to='/login'>Login</NavLink></li>

                                          <li><NavLink className={'text-lg '} to='/dashboard'>Dashboard</NavLink></li>
                                          <li><NavLink className={'text-lg '} to='/addproject'>Add Project</NavLink></li>
                                          <li><NavLink className={'text-lg '} to='/user'>User</NavLink></li>
                                          <li><NavLink className={'text-lg '} to='/contributor'>Contributors</NavLink></li>

                                          <div className='mt-4'>
                                                < hr />
                                          </div>

                                          <li><NavLink className={'text-lg '} to='/'>Home</NavLink></li>
                                          <li><button className={'text-lg  mb-10'} >LogOut</button ></li>
                                    </ul>

                              </nav>
                        </div>
                        <nav className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} z-10 bg-white shadow-xl absolute left-0 px-10 top-20 flex flex-col gap-4 p-4`}>
                              {menuOpen && (
                                    <ul className="flex flex-col gap-5 ">

                                          <li><NavLink className={'text-lg '} to='/login'>Login</NavLink></li>
                                          <li><NavLink className={'text-lg '} to='/dashboard'>Dashboard</NavLink></li>
                                          <li><NavLink className={'text-lg '} to='/addproject'>Add Project</NavLink></li>
                                          <li><NavLink className={'text-lg '} to='/user'>User</NavLink></li>
                                          <li><NavLink className={'text-lg '} to='/contributor'>Contributors</NavLink></li>

                                          <div className='mt-4'>
                                                < hr />
                                          </div>

                                          <li><NavLink className={'text-lg '} to='/'>Home</NavLink></li>
                                          <li><button className={'text-lg  mb-10'} >LogOut</button ></li>
                                    </ul>
                              )}
                        </nav>
                  </div>
            </header>
      );
}

export default Navbar;