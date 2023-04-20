import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { signOutUser } from './../../utils/firebase/firebase.utils.js';
import { UserContext } from '../../context/user.context';
import CrwnLogo from './../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={CrwnLogo} alt='crwn logo' className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              Sign out
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
