import Tree from 'Tree';
import css from './ApplicationBase.styl';
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { root as Root } from 'baobab-react/higher-order';

import ApplicationHeader from 'Application/Header/ApplicationHeader';


class ApplicationBase extends Component {

  static propTypes = {
    children: React.PropTypes.any
  };

  static childContextTypes = {
    currentUser: React.PropTypes.shape({
      id: React.PropTypes.number,
      username: React.PropTypes.string,
      profilePictureUrl: React.PropTypes.string,
      fillName: React.PropTypes.string,
      counts: React.PropTypes.object,
      hasProfilePic: React.PropTypes.bool,
    })
  };

  getChildContext() {
    return {
      currentUser: {
        id: null, // not authorized
        username: '!unauthorized'
      }
    };
  }

  render() {
    return (
      <DocumentTitle title="Instagram">
        <section className={css.ApplicationBase}>
          <ApplicationHeader />
          {this.props.children}
        </section>
      </DocumentTitle>
    );
  }
}

export default Root(ApplicationBase, Tree);
