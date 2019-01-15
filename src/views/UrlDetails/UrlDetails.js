import React, { Component } from 'react'

import ModalComponent from '../../components/ModalComponent'

export default class UrlDetails extends Component {
    toggle = () => {
        this.modal.toggle()
    }
    render() {
        return (
            <div className="UrlDetails">
                 <button onClick={this.toggle}>Add Your Url</button>
                 <ModalComponent ref={c => this.modal = c}/>
            </div>
        );
    }
}
