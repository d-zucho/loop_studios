import Navbar from './Navbar'
import './styles/header.styles.css'

const Header = () => {
  return (
    <header>
      <div className='overlay'></div>
      <Navbar />
      <div className='hero-text-container container'>
        <div className='hero'>
          <h1 className='hero-text'>Immersive Experiences that Deliver</h1>
        </div>
      </div>
    </header>
  )
}

export default Header
