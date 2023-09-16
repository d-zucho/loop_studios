import './styles/creations.styles.css'
import { photos } from '../photos'
import Card from './Card'
const Creations = () => {
  return (
    <section className='section-container container'>
      <div className='creations-header'>
        <h2 className='creations-title'>Our Creations</h2>
        <button className='see-all'>See All</button>
      </div>
      <div className='photo-spread'>
        {photos.map((photo) => (
          <div className='card'>
            <Card
              key={photo.id}
              className='card-container'
              src={photo.src}
              title={photo.title}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Creations
