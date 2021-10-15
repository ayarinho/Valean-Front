import React, { useEffect } from 'react';
import Modal from 'react-awesome-modal';
import './Popup.css'
import {Cloudinary} from 'cloudinary-core';
import { isAuth } from '../../helpers/auth';

const Popup = (props) => {

 
      
    console.log(props)

    return (


        <Modal
            visible={props.modal}
            width="400"
            height="300"
            effect="fadeInUp"
            onClickAway={props.closeModal}
        >
            <div>

                <h1 style={{ marginLeft: '37%', marginTop: '3%' }}>{props.success}</h1>
                <hr/>
                <img src="https://res.cloudinary.com/orange112/image/upload/v1631024750/test/mhy1szjqfrppxdvchg1j.svg" 
                style={{width:'60px',height:'60px',marginLeft:'40%'}} />


                <p style={{ marginLeft: '17%', marginTop: '7%', color: 'red' }}>{props.errors ?  `Response : ${props.errors}` : null  } </p>

                <p style={{ marginLeft: '17%', marginTop: '7%', color: 'green' }}> {props.message ?  `Response : ${props.message}` : null  }  </p>



                <a href=""
                    onClick={props.closeModal}
                ></a>
            </div>
        </Modal>


    );
};

export default Popup;