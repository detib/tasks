import React from 'react';

import FirstPart from '../components/FirstTask/FirstPart'
import SecondPart from '../components/FirstTask/SecondPart'

const FirstTask = () => {
  return (
    <div className='first-task'>
      <FirstPart />
      <SecondPart />
    </div>
  );
};

export default FirstTask;
