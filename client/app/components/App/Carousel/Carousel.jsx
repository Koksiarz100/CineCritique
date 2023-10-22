import React from 'react'

function Card(title, description, image) {
  return(
    <div className='card-wrapper'>
      <div className='card-image'>
        {image}
      </div>
      <div className='card-content'>
        <div className='card-title'>
          <h3>{title}</h3>
        </div>
        <div className='card-description'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Carousel(props) {
  const { info } = props;
  const catergory = props.title;
  return (
    <div className='carousel-wrapper'>
      <div className='carousel-title'>
        <h2>{catergory}</h2>
      </div>
      <div className='carousel-content'>
        {Object.keys(info).map((key) => {
          return Card(info[key].title, info[key].description, info[key].image)
        })}
      </div>
    </div>
  )
}