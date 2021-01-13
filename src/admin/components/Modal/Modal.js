import React from 'react';

import './style.css';

const Modal = ({ id = 'modal', onClose = () => {}, children }) => {

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    }

    return(
    <div id={id} classname="modal" onClick={handleOutsideClick}            >
        <div className="containerModal">
            <button className="close" onClick={onClose}>Não</button>
            <div className="content" >
                {children}
            </div>
        </div>
    </div>)
}

export default Modal;