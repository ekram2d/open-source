import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
      const [opne, setOpen] = useState(true);

      return (
            <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  w-full sm:w-[80%] mx-auto mt-3 ">
              {/* Page content here */}
              <label htmlFor="my-drawer-2" className=" flex w-[20%] m-3 justify-centers items-center mx-auto btn-primary drawer-button lg:hidden btn btn-sm"> Drawer</label>
                        <Outlet></Outlet>


                  </div>
                  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4  min-h-full w-[30%] lg:w-80 text-base-content bg-[#646362]">
                              {/* Sidebar content here */}
                              <li><NavLink to='/dashboard/home'>Sidebar Item 1</NavLink>
                              </li>
                              <li><NavLink to='/dashboard/home'>Sidebar Item 1</NavLink>
                              </li>
                              <li><NavLink to='/dashboard/about'>Sidebar Item 1</NavLink>
                              </li>
                              <li><NavLink to='/dashboard/home'>Sidebar Item 1</NavLink>
                              </li>
                              <li><NavLink to='/dashboard/home'>Sidebar Item 1</NavLink>
                              </li>
                              <li><a>Sidebar Item 2</a></li>




                        </ul>

                  </div>
            </div>
      );
};

export default DashBoard;