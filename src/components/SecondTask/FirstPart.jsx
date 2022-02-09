import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles/FirstPart.scss';
import { tabs, tabPanels } from './data';
import { Link } from 'react-router-dom';

const FirstPart = () => {
  return (
    <div className='react-tabs-component'>
      <Tabs>
        <TabList>
          {tabs.map((props, i) => {
            return <Tab key={props.tabName + i}>{props.tabName}</Tab>;
          })}
        </TabList>
        {tabPanels.map((props, i) => {
          return (
            <TabPanel key={props + i}>
              {props.map((props, i) => {
                return (
                  <div key={props.name + i} className='tab-panel-box'>
                    <h6 className='domain-name'>{props.name}</h6>
                    <div className='price'>
                      <h6 className='exact-price'>{props.price}</h6>
                      <p className='before-price'>{props.instead}</p>
                    </div>
                    <Link className='box-link' to='/second-task'>
                      Buy Now
                    </Link>
                  </div>
                );
              })}
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
};

export default FirstPart;
