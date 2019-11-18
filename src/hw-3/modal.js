import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, title }) => {
  return ReactDOM.createPortal(
      <div className="modal-fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{ title }</h5>
            </div>
            <div className="modal-body">
              { children }
            </div>
          </div>
        </div>
      </div>,
      document.getElementById('modal')
  );
};

export default Modal;