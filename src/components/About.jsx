import Feature from '../assets/desktop/image-interactive.jpg'
import './styles/about.styles.css'

const About = () => {
  return (
    <div className='container about-container'>
      <img src={Feature} alt='' />
      <div className='about-copy-container'>
        <h2 className='about-title'>The leader in interactive VR</h2>
        <p className='about-info'>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  )
}

export default About
