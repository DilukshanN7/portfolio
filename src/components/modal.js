import React from 'react';
import Backdrop from './backdrop';
import './modal.css';

const Modal = ({ close }) => {
  return (
      <div className='bg'  onClick={close}>
        <div className='modal p-5' onClick={(e) => e.stopPropagation()}>
          <p className='text-center mb-5 font-bold text-2xl'>Thanks for your interest in working with me. I'll get back to you as soon as possible</p>
          <button onClick={close} className='modal-close-button'>
            Close
          </button>
        </div>
      </div>
  );
};

export default Modal;
