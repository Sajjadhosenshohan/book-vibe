import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div >
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className=" text-3xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#131313CC] flex gap-4">

                        <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold border-[#23BE0A] rounded-lg' : 'font-bold'}>Home</NavLink>

                        <NavLink to="" className={({ isActive }) => isActive ? 'font-bold' : 'font-bold'}>Listed Books</NavLink>

                        <NavLink to="" className={({ isActive }) => isActive ? 'font-bold' : 'font-bold'}>Pages to Read</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <button className="font-bold text-white text-xl py-4 px-6 rounded-lg bg-[#23BE0A]">Sign In</button>

                    <button className="font-bold text-white text-xl py-4 px-6 rounded-lg bg-[#59C6D2]">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;