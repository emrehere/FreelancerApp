import React from 'react'
import AlreadyHaveAccount from './AlreadyHaveAccount';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';


const Backdrop = () => { 

    const savedLink = useSelector((state: RootState) => state.navbar.savedLink);

    return (
        <div>
        <div
      className="backdrop"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
        zIndex: 150,
      }}
    >
      <AlreadyHaveAccount savedLink={savedLink} />

        </div>
  
    </div>
    )

}

export default Backdrop