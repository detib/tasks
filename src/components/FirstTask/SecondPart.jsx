import React from 'react';
import SingleCard from './CardSecondPart';
import man from '../../assets/FirstTask/man.jpg';
import './styles/CardSecondPart.scss';

const SecondPart = () => {
  const cards = [
    {
      date: '3.3.0 (14/05/2018)',
      background: '#0f0',
      buttonText: 'New',
      image: man,
      name: 'Kevin Joe',
      paragraph:
        'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization',
    },
    {
      date: '3.1.0 (20/05/2015)',
      background: '#00f',
      buttonText: 'Fix',
      image: man,
      name: 'Kevin Joe',
      paragraph:
        'Introducing Host Cloud Drive - virtual drive functionality   New Share options and management New, more user friendly design Sync optimizations Various performance improvements and bug fixes',
    },
    {
      date: '3.1.0 (20/05/2015)',
      background: '#f0f',
      buttonText: 'Improvement',
      image: man,
      name: 'Kevin Joe',
      paragraph:
        'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes',
    },
    {
      date: '3.3.0 (14/05/2018)',
      background: '#0f0',
      buttonText: 'New',
      image: man,
      name: 'Kevin Joe',
      paragraph:
        'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization',
    },
    {
      date: '3.1.0 (20/05/2015)',
      background: '#00f',
      buttonText: 'Fix',
      image: man,
      name: 'Kevin Joe',
      paragraph:
        'Introducing Host Cloud Drive - virtual drive functionality   New Share options and management New, more user friendly design Sync optimizations Various performance improvements and bug fixes',
    },
    {
      date: '3.1.0 (20/05/2015)',
      background: '#f0f',
      buttonText: 'Improvement',
      image: man,
      name: 'Kevin Joe',
      paragraph:
        'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes',
    },
    {
      date: '3.3.0 (14/05/2018)',
      background: '#0f0',
      buttonText: 'New',
      image: man,
      name: 'Kevin Joe',
      paragraph:
        'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization',
    },
    {
      date: '3.1.0 (20/05/2015)',
      background: '#00f',
      buttonText: 'Fix',
      image: man,
      name: 'Kevin Joe',
      paragraph:
        'Introducing Host Cloud Drive - virtual drive functionality   New Share options and management New, more user friendly design Sync optimizations Various performance improvements and bug fixes',
    },
    {
      date: '3.1.0 (20/05/2015)',
      background: '#f0f',
      buttonText: 'Improvement',
      image: man,
      name: 'Kevin Joe',
      paragraph:
        'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes',
    },
  ];

  return (
    <div className='card-container'>
      {cards.map((props, i) => {
        return (
          <SingleCard
            key={i}
            date={props.date}
            background={props.background}
            buttonText={props.buttonText}
            image={props.image}
            name={props.name}
            paragraph={props.paragraph}
          />
        );
      })}
    </div>
  );
};

export default SecondPart;
