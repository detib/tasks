import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-page'>
      <Link to='/first-task'>First Task</Link>
      <Link to='/second-task'>Second Task</Link>
      <Link to='/third-task'>Third Task</Link>
    </div>
  );
};

export default Home;
