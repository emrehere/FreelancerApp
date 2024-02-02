// Navbar.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navSearchToggle } from '../NavbarComp/NavReducer';

function Navbar() {
  const dispatch = useDispatch();
  const searchToggle = useSelector((state: any) => state.navbar.searchToggle);

    useEffect(() => {
      console.log(searchToggle)
    }, [searchToggle])

  return (
    <div>
      <div onClick={() => dispatch(navSearchToggle())}>
        Toggle Search: {searchToggle ? 'ON' : 'OFF'}
      </div>
      {/* other content */}
    </div>
  );
}

export default Navbar;
