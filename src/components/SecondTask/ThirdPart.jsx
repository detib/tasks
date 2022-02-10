import React, { useState } from 'react';
import './styles/ThirdPart.scss';
import { BsPerson } from 'react-icons/bs';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

const questions = [
  {
    question: 'How does Parkname seperate itself from other domain name parking companies?',
    paragraph:
      'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.',
  },
  {
    question: 'Is Parkname Parking actually free?',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto harum rem molestiae modi sunt, error facilis sit aliquam ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto harum rem molestiae modi sunt, error facilis sit aliquam ipsum.',
  },
  {
    question: 'What you do?',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a maxime odio alias, molestias minima aperiam porro voluptate maiores doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a maxime odio alias, molestias minima aperiam porro voluptate maiores doloribus.',
  },
  {
    question: 'When was Parkname first founded?',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consectetur alias reprehenderit, atque amet pariatur exercitationem neque, iure aspernatur dolorum nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consectetur',
  },
];

const ThirdPart = () => {
  const [main, setMain] = useState(false);
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);

  const showMain = () => {
    setMain(!main);
    if (!main) {
      setQuestion1(false);
      setQuestion2(false);
      setQuestion3(false);
      setQuestion4(false);
    }
  };
  const showQuestion0 = () => {
    setQuestion1(!question1);
  };
  const showQuestion1 = () => {
    setQuestion2(!question2);
  };
  const showQuestion2 = () => {
    setQuestion3(!question3);
  };
  const showQuestion3 = () => {
    setQuestion4(!question4);
  };

  const showQuestions = [showQuestion0, showQuestion1, showQuestion2, showQuestion3];

  const Questions = [question1, question2, question3, question4];

  return (
    <div className='about-us-container'>
      <div className='about-us'>
        <div
          onClick={showMain}
          style={{ borderBottom: main ? '1px solid #d8d8d8' : null }}
          className='about-question'
        >
          <div className='icon-container'>
            <BsPerson />
          </div>
          <div className='question-container'>
            <h6>About Us</h6>
            <p>4 articles in this Topic</p>
          </div>
          <MdKeyboardArrowDown className={`arrow-down ${main ? 'rotate' : null}`} />
        </div>
        {main
          ? questions.map((props, i) => {
              return (
                <div onClick={showQuestions[i]} key={props.question + i} className='question'>
                  <div className='header'>
                    <p className='header_question'>{props.question}</p>
                    <MdKeyboardArrowRight className={`${Questions[i] ? 'turnup' : null}`} />
                  </div>
                  {Questions[i] ? <p className='answer'>{props.paragraph}</p> : null}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ThirdPart;
