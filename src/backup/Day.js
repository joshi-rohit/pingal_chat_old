import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import moment from 'moment/min/moment-with-locales.min';

export default class Day extends Component {
  render() {
    if (!this.props.isSameDay(this.props.currentSlide, this.props.previousSlide)) {
      return (
        <View style={[styles.container, this.props.containerStyle]}>
          <View style={[styles.wrapper, this.props.wrapperStyle]}>
            <Text style={[styles.text, this.props.textStyle]}>
              {moment(this.props.currentSlide.timestamp).locale(this.context.getLocale()).format('ll').toUpperCase()}
            </Text>
          </View>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  wrapper: {
    // backgroundColor: '#ccc',
    // borderRadius: 10,
    // paddingLeft: 10,
    // paddingRight: 10,
    // paddingTop: 5,
    // paddingBottom: 5,
  },
  text: {
    backgroundColor: 'transparent',
    color: '#b2b2b2',
    fontSize: 12,
    fontWeight: '600',
  },
});

Day.contextTypes = {
  getLocale: PropTypes.func,
};

Day.defaultProps = {
  containerStyle: {},
  wrapperStyle: {},
  textStyle: {},
  isSameDay: () => {},
  currentSlide: {
    // TODO test if crash when timestamp === null
    timestamp: null,
  },
  previousSlide: {},
};
