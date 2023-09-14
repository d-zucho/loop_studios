import './styles/footer.styles.css'
import Logo from '../assets/logo.svg'
import Twitter from '../assets/icon-twitter.svg'
import Pinterest from '../assets/icon-pinterest.svg'
import Instagram from '../assets/icon-instagram.svg'
import Facebook from '../assets/icon-facebook.svg'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container container'>
        {/* logos */}
        <div className='logos'>
          <img src={Logo} alt='' />
          <div className='socials'>
            <img src={Facebook} alt='' />
            <img src={Twitter} alt='' />
            <img src={Pinterest} alt='' />
            <img src={Instagram} alt='' />
          </div>
        </div>

        {/* links */}
        <div className='links'>
          <div className='footer-nav-contrainer'>
            <nav className='footer-nav'>
              <ul className='footer-links'>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
              </ul>
            </nav>
          </div>

          <div className='copy'>
            <p>&copy; 2021 Loopstudios. All right reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
