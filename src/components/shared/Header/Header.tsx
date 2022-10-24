// import './Header.css';
import {Navbar} from '../Navbar/Navbar';

export function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__inner'>
          <div className='header__logo'>Logo</div>
          <Navbar />
        </div>
      </div>
    </div>
  );
}
