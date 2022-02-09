import React from 'react';
import { RiRulerLine, RiText } from 'react-icons/ri';
import { BsGlobe, BsSearch } from 'react-icons/bs';
import { FiAward } from 'react-icons/fi';
import { HiOutlineSpeakerphone, HiOutlineLightBulb } from 'react-icons/hi';
import { ReactComponent as Percentange } from '../../assets/FirstTask/percent.svg';
import { ReactComponent as DotCom } from '../../assets/FirstTask/dotcom.svg';
import './styles/FirstPart.scss';

const content = [
  {
    logo: <DotCom style={{strokeWidth: '0.2px', fill: '#8ca9d8'}}/>,
    title: 'The TLD',
    paragraph: 'Does the domain extension math the language of the domain name?',
  },
  {
    logo: <RiRulerLine />,
    title: 'Domain Length',
    paragraph: 'Is the domain short enought to remember',
  },
  {
    logo: <BsGlobe />,
    title: 'Language',
    paragraph: 'How complex is the actual domain name?',
  },
  {
    logo: <FiAward />,
    title: 'International recognition',
    paragraph: 'Can the domain name be used on an international scale?',
  },
  {
    logo: <BsSearch />,
    title: 'Search engine',
    paragraph: 'Does the domain follow search engine guidelines?',
  },
  {
    logo: <HiOutlineSpeakerphone />,
    title: 'Advertising Potential',
    paragraph: 'Could the domain be used for advertising campaigns?',
  },
  {
    logo: <Percentange style={{ width: '1em', height: '1em' }} />,
    title: 'Sales Opportunities',
    paragraph: 'Can the domain name be used on an intrnational scale?',
  },
  {
    logo: <RiText />,
    title: 'Typo susceptibility',
    paragraph: 'How high is the risk of mistyping the domain name?',
  },
  {
    logo: <HiOutlineLightBulb />,
    title: 'Business potential',
    paragraph: 'Can the domain be used as your company address?',
  },
];

const FirstPart = () => {
  return (
    <div className='first-task-container'>
      {content.map((props, i) => {
        return (
          <div className='item' key={props.title + i}>
            <div className='logo-container'>{props.logo}</div>
            <div className='card-content'>
              <h6>{props.title}</h6>
              <p>{props.paragraph}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FirstPart;
