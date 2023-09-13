const Card = ({ src, title }) => {
  return (
    <div>
      <img src={src} alt='' />
      <div className='image-title'>{title}</div>
    </div>
  )
}

export default Card
