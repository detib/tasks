import React from 'react';
import './styles/Backdrop.scss';

const Backdrop = (props) => {
  return <div style={{zIndex: props.zIndex}} onClick={props.showModal, props.noSave} className='backdrop' />;
};

export default Backdrop;
