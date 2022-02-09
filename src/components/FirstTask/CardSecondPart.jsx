import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = (props) => {
  const boxShadowAdd = (e) => {
    e.target.style.boxShadow = `0 0 3px 1px ${props.background}`;
  };
  const boxShadowRemove = (e) => {
    e.target.style.boxShadow = 'unset';
  };
  return (
    <div className='single-card'>
      <h6>{props.date}</h6>
      <div className='button-image'>
        <Link
          to='/'
          style={{
            backgroundColor: props.background,
          }}
          onMouseEnter={boxShadowAdd}
          onMouseLeave={boxShadowRemove}
          className='button'
        >
          {props.buttonText}
        </Link>
        <div className='info'>
          <span className='image-container'>
            <div style={{ content: `url(${props.image})` }} className='image' />
          </span>
          <span className='name'>{props.name}</span>
        </div>
      </div>
      <p className='card-text'>{props.paragraph}</p>
      <Link to='/' className='download'>
        Download
      </Link>
    </div>
  );
};

export default SingleCard;
