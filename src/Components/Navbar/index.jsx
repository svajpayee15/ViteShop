import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";
// import {ShoppingCartIcon} from '@heroicons/react/24/solid';
import {ShoppingBagIcon} from '@heroicons/react/24/solid';

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  const handleOpenCheckoutSideMenu = () => {
    context.openCheckoutSideMenu();
    console.log('click')
  };

  return (
    // <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 top-0 text-sm font-light">
    <nav className="flex flex-wrap justify-between items-center fixed z-10 w-full py-5 px-8 top-0 text-sm font-light bg-slate-900 text-white">
      {/* Left Side */}
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">ViteShop</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            onClick={() => context.setSearchByCategory('furniture')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>

      {/* Right Side */}
      {/* <ul className="flex items-center gap-3"> */}
      <ul className="flex items-center gap-3 lg:ml-auto">
      <li className="text-white/60 hidden lg:block">maxi.sm117@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li> */}
        {/* <li>🛒{context.count}</li> */}
        <li className="flex items-center"> 
          <ShoppingBagIcon 
            className="h-4 w-4 m-0.5 cursor-pointer"
            onClick={handleOpenCheckoutSideMenu}
          />
          {/* <div>{context.count}</div> */}
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
