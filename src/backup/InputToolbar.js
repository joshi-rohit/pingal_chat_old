import React, { Component, PropTypes } from 'react';
import {
  PixelRatio,
  StyleSheet,
  View,
} from 'react-native';

import Composer from './Composer';
import Send from './Send';
import MailTo from './MailTo';


export default class InputToolbar extends Component {
  renderMailTo() {
    if (this.props.renderMailTo) {
      return this.props.renderMailTo(this.props);
    }
    return <MailTo {...this.props}/>;;
  }



  renderActions() {
    if (this.props.renderActions) {
      return this.props.renderActions(this.props);
    }
    return null;
  }

  renderSend() {
    if (this.props.renderSend) {
      return this.props.renderSend(this.props);
    }
    return <Send {...this.props}/>;
  }

  renderComposer() {
    if (this.props.renderComposer) {
      return this.props.renderComposer(this.props);
    }

    return (
      <Composer
        {...this.props}
      />
    );
  }

  renderAccessory() {
    if (this.props.renderAccessory) {
      return (
        <View style={[styles.accessory, this.props.accessoryStyle]}>
          {this.props.renderAccessory(this.props)}
        </View>
      );
    }
    return null;
  }

  render() {

    return (
      <View style={[styles.container, this.props.containerStyle]}>

      <View style={[styles.primary, this.props.primaryStyle]}>
          {this.renderActions()}
          {this.renderComposer()}
        </View>

        <View style={[styles.mailto, this.props.primaryStyle]}>
        {this.renderMailTo()}
        {this.renderSend()}
        </View>

        {this.renderAccessory()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1 / PixelRatio.get(),
    borderTopColor: '#b2b2b2',

    backgroundColor: '#FFFFFF',
  },
  primary: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  mailto: {
    flexDirection: 'row',
    alignItems: 'flex-end',

  },
  accessory: {
    height: 44,
  },
});

InputToolbar.defaultProps = {
  containerStyle: {},
  primaryStyle: {},
  accessoryStyle: {},
  renderAccessory: null,
  renderActions: null,
  renderSend: null,
  renderComposer: null,
  renderMailTo: null,
};
