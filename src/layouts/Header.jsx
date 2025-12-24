import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-slate-800 text-green-400 font-semibold text-xl px-24 py-6 flex items-center justify-around">
      <Link to={'/'} className="hover:underline">
        Home
      </Link>
      <Link to={'/products'} className="hover:underline">
        Products
      </Link>
    </div>
  );
};

export default Header;