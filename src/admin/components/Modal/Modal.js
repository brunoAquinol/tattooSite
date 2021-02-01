import React from 'react';

import './style.css';

const Modal = (props) => {
    const {id = 'modal' , onClose = () => {} , children} = props

    const handleOutsideClick = (e) =>{
        if(e.target.id === id) onClose()
    };

    return(
        <div id={id} className="modal" onClick={handleOutsideClick}>
            <div className="containerModal" >   
                <div className="content" >
                    {children}
                </div>
            </div>
        </div>
   )
}

export default Modal;