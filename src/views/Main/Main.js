import React, { Component } from 'react'

import Cards from '../../components/Cards'
import Header from '../../components/Header'
import UrlDetails from '../UrlDetails/UrlDetails'

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <UrlDetails />
        <Cards />
      </div>
    );
  }
}