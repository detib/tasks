import React, { useState } from 'react';
import './styles/SecondPart.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';

const SecondPart = () => {
  const [show, setShow] = useState(false);

  const showText = () => {
    setShow(!show);
  };

  return (
    <div onClick={showText} className='use-state-card'>
      <div style={{ borderBottom: show ? '1px solid #c9c9c9' : null }} className='question'>
        <h6>Why park a domain name in Parkname ?</h6>
        <MdKeyboardArrowDown className={show ? 'rotate' : null} />
      </div>
      {show ? (
        <p>
          Parkname is the leading industry standard for domain name parking and monetization
          services. We offer a wide variety of services to help you achieve success.
        </p>
      ) : null}
    </div>
  );
};

export default SecondPart;
