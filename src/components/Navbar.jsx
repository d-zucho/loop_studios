import logo from '../assets/logo.svg'

import './styles/navbar.styles.css'

const Navbar = () => {
  return (
    <>
      <div className='container'>
        <div className='nav-container'>
          <div className='logo-container'>
            <img src={logo} alt='logo' />
          </div>
          <nav>
            <a href='#'>About</a>
            <a href='#'>Careers</a>
            <a href='#'>Events</a>
            <a href='#'>Products</a>
            <a href='#'>Support</a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
