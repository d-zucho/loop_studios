import './styles/card.styles.css'

const Card = ({ src, title }) => {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={src} alt='' />
        <p className='image-title'>{title}</p>
        <div className='card-overlay'></div>
      </div>
    </div>
  )
}

export default Card
