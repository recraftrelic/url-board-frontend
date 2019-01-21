import React, { Component } from 'react'

import ModalComponent from '../../components/ModalComponent'

import '../../styles/components/url-details.css'

export default class UrlDetails extends Component {
    toggle = () => {
        this.modal.toggle()
    }
    render() {
        return (
            <div className="UrlDetails">
                 <button onClick={this.toggle} className="add-url-btn">Add Your Url</button>
                 <ModalComponent ref={c => this.modal = c} />
            </div>
        );
    }
}
