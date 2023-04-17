import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import CrwnLogo from './../../assets/crown.svg';
import './navigation.styles.scss';

const NavigationBar = () => {
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
          <Link className='nav-link' to='/sign-in'>
            Signin
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
