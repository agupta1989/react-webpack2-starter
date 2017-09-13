import React, { Component } from 'react';
import Container from './Container';

export default class DustbinMultipleTargets extends Component {
  render() {
    return (
      <div>
        <p>
          It demonstrates how a single drop target may accept multiple types, and how those types may be derived from props.
          It also demonstrates the handling of native files and URLs (try dropping them onto the last two dustbins).
        </p>
        <Container />
      </div>
    );
  }
}
