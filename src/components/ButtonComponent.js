import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class ButtonComponent extends Component {
  render() {

    const { title } = this.props

    return (
        <Button>{title}</Button>
    )
  }
}