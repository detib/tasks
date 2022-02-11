import React, { useState } from 'react';
import Backdrop from './Backdrop';
import './styles/Modal.scss';

const inputs = [
  {
    id: 'fontColor',
    input: 'Font Color',
  },
  {
    id: 'backgroundColor',
    input: 'Background Color',
  },
  {
    id: 'buttonColor',
    input: 'Button Color',
  },
  {
    id: 'buttonBorderColor',
    input: 'Button Border Color',
  },
  {
    id: 'buttonMouseoverColor',
    input: 'Buttons Mouseover Color',
  },
];

const Modal = () => {
  const [color1, setColor1] = useState('#444444');
  const [color2, setColor2] = useState('#FFFFFF');
  const [color3, setColor3] = useState('#2072EF');
  const [color4, setColor4] = useState('#2072EF');
  const [color5, setColor5] = useState('#0053D1');

  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };

  const Colors = [color1, color2, color3, color4, color5];

  const changeColor1 = (e) => {
    setColor1(document.getElementById('fontColor').value);
    // setColor1(e.target.value);
  };
  const changeColor2 = (e) => {
    setColor2(document.getElementById('backgroundColor').value);
    // setColor2(e.target.value);
  };
  const changeColor3 = (e) => {
    setColor3(document.getElementById('buttonColor').value);
    // setColor3(e.target.value);
  };
  const changeColor4 = (e) => {
    setColor4(document.getElementById('buttonBorderColor').value);
    // setColor4(e.target.value);
  };
  const changeColor5 = (e) => {
    setColor5(document.getElementById('buttonMouseoverColor').value);
    // setColor5(e.target.value);
  };

  const colorChangers = [changeColor1, changeColor2, changeColor3, changeColor4, changeColor5];
  const colorChanger = () => {
    changeColor1();
    changeColor2();
    changeColor3();
    changeColor4();
    changeColor5();
  };

  const inital = () => {
    setColor1((document.getElementById('fontColor').value = '#444444'));
    setColor2((document.getElementById('backgroundColor').value = '#FFFFFF'));
    setColor3((document.getElementById('buttonColor').value = '#2072EF'));
    setColor4((document.getElementById('buttonBorderColor').value = '#2072EF'));
    setColor5((document.getElementById('buttonMouseoverColor').value = '#0053D1'));
    setModal();
  };

  const zIndex = 100;

  return (
    <div className='modal-container'>
      <button onClick={showModal} className='show-popup-button' style={{ color: Colors[0] }}>
        Show Popup
      </button>
      {modal ? <Backdrop zIndex={zIndex - 1} noSave={inital} showModal={showModal} /> : null}

      <div
        style={{ display: modal ? 'flex' : 'none', backgroundColor: Colors[1], zIndex: zIndex }}
        className='modal'
      >
        <div className='modal-header'>
          <h6 style={{ color: Colors[0] }}>Theme Color</h6>
          <p style={{ color: Colors[0] }} onClick={colorChanger}>
            Change Theme
          </p>
        </div>
        <div className='modal-inputs'>
          {inputs.map((props, i) => {
            return (
              <div key={props.id} className='input-field'>
                <p className='input-name' style={{ color: Colors[0] }}>
                  {props.input}
                </p>
                <div className='color-input'>
                  <p style={{ color: Colors[0] }} className='color-output'>
                    {Colors[i]}
                  </p>
                  <input
                    className='color-input-button'
                    // onInput={colorChangers[i]}
                    defaultValue={Colors[i]}
                    id={props.id}
                    type='color'
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className='save-cancel'>
          <button onClick={inital} style={{ color: Colors[0] }}>
            Cancel
          </button>
          <button
            onClick={showModal}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = Colors[4];
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = Colors[2];
            }}
            style={{
              color: Colors[0],
              borderColor: Colors[3],
              backgroundColor: Colors[2],
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
