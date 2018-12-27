import React, { Component } from 'react';
import '../styles/Home.css';
import '../index.css';
import "../styles/Follow.css";
import "../styles/Home.css";
import Modal from 'react-modal';

const customStyles = {
    content : {
    top                   : '40%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-40%',
    transform             : 'translate(-50%, -50%)'
    }
};

class Error extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: props.isOpenModal
        };
        this.afterOpenModal = this.afterOpenModal.bind(this);
    }
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }   
    
    render(){
        console.log("aaaaaa");
        return( 
            <Modal
                isOpen={this.props.isOpenModal}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >

                <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.text}</h2>
                <button className="login100-form-btn" onClick={this.props.closeModal}>close</button>
                
            </Modal> 
    )}
}

export default Error;