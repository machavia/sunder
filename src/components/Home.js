import React, { Component, PropTypes } from 'react';
import './Home.scss';
import PuzzleIcon from 'src/components/PuzzleIcon';
import Button from './Button';

export default class Home extends Component {
  static contextTypes = { router: PropTypes.object }

  render() {
    return (
      <div className="container home">
        <h1 className="home-title align-center">
          Secret Splitter
        </h1>
        <div className="home-actions align-center">
          <Button type="xlarge"
            icon={<PuzzleIcon className="split" />}
            id="split-button"
            onClick={() => this.context.router.push('split')}>
            Split a secret
          </Button>
          <Button type="xlarge"
            icon={<PuzzleIcon />}
            id="recover-button"
            onClick={() => this.context.router.push('recover')}>
            Recover a secret
          </Button>
        </div>
        <p className="home-explanation">
          {"Secret Splitter is an implementation of Shamir's Secret Sharing scheme. " +
            "Under this scheme a secret is split into some number of pieces, called 'shares.'" +
            ' A configurable quorum of these shares is required to recover the original secret. '}
        </p>
      </div>
    );
  }
}