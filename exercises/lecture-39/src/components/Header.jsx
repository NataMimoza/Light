import React, { useContext } from 'react';
import BlogContext from './BlogContext';

const Header = () => {
  const blogName = useContext(BlogContext);

  return (
    <header className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold">{blogName}</h1>
    </header>
  );
};

export default Header;