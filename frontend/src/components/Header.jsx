
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import user from '../assets/user.svg';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='max-padd-container w-full z-50'>
      <div className='flexBetween py-3'>
        {/* logo */}
        <Link to={"/"} className='flex items-center gap-x-2'>
          <img 
            src={logo}
            alt='logoimg'
            height={31}
            width={31}
          />
          <span className='bold-24 hidden xs:flex'>Merchanza</span>
        </Link>
        {/* Navbar & Buttons */}
        <div className='flexCenter gap-x-4'>
          <div>
            <Navbar />
          </div>
          {/* buttons */}
          <div>
            buttons
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header