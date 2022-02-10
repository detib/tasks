import React from 'react';

import FirstPart from '../components/SecondTask/FirstPart';
import SecondPart from '../components/SecondTask/SecondPart';
import ThirdPart from '../components/SecondTask/ThirdPart';

const SecondTask = () => {
  return (
    <div className='second-task'>
      <FirstPart />
      <SecondPart />
      <ThirdPart />
    </div>
  );
};

export default SecondTask;
