import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
     <div>
        <li>
          <button>
          <Link to='/'>Im Lost</Link>
          </button>
        </li>
        <li>
          <Link to='/About'>About Me</Link>
        </li>
        <li>
          <Link to='/Contacts'>Emergency Contacts</Link>
        </li>
      </div>
  )
};

export default Navigation;