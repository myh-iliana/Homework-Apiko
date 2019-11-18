import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom'

import Modal from './modal';

const ShopPage = () => {
  const [modal, setModal] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const onModalOpen = () => setModal(true);

  const onModalClose = () => {
    setModal(false);
    setRedirect(true);
  };

  return (
      <Fragment>
        <h2>Welcome to Shop</h2>
        <button className='btn btn-primary btn-lg' onClick={ onModalOpen }>Buy</button>
        {
          modal
              ? <Modal title='No items'>
                  <p>There is no products now</p>
                  <button className="btn btn-secondary" onClick={ onModalClose }>OK</button>
              </Modal>
              : null
        }
        {
          redirect ? <Redirect to='/' /> : null
        }
      </Fragment>
  );
};

export default ShopPage;