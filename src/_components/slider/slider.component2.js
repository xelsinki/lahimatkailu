import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import MultiSlider from 'react-native-MultiSlider';

import { mapped, mapValues } from '../../_helpers';
import { filterActions } from '../../_actions';
import { styles } from '../slider';

import {
  StyleSheet,
  Slider,
  Image,
  Platform,
} from 'react-native';

import MultiSlider from 'react-native-multi-slider';

export default class SliderComponent2 extends Component {
  state = {
    sliderOneChanging: false,
    sliderOneValue: [5],
    multiSliderValue: [3, 7],
  };

  sliderOneValuesChangeStart = () => {
    this.setState({
      sliderOneChanging: true,
    });
  }

  sliderOneValuesChange = (values) => {
    let newValues = [0];
    newValues[0] = values[0];
    this.setState({
      sliderOneValue: newValues,
    });
  }

  sliderOneValuesChangeFinish = () => {
    this.setState({
      sliderOneChanging: false,
    });
  }

  multiSliderValuesChange = (values) => {
    this.setState({
      multiSliderValue: values,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sliders</Text>
        <View style={styles.sliders}>
          <View style={styles.sliderOne}>
            <Text style={styles.text}>One Marker with callback example:</Text>
            <Text style={[styles.text, this.state.sliderOneChanging && {color: 'red' }]}>{this.state.sliderOneValue}</Text>
          </View>
          <MultiSlider
            values={this.state.sliderOneValue}
            sliderLength={280}
            onValuesChangeStart={this.sliderOneValuesChangeStart}
            onValuesChange={this.sliderOneValuesChange}
            onValuesChangeFinish={this.sliderOneValuesChangeFinish}
          />
          <View style={styles.sliderOne}>
            <Text style={styles.text}>Two Markers:</Text>
            <Text style={styles.text}>{this.state.multiSliderValue[0]} </Text>
            <Text style={styles.text}>{this.state.multiSliderValue[1]}</Text>
          </View>
          <MultiSlider
            values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
            sliderLength={280}
            onValuesChange={this.multiSliderValuesChange}
            min={0}
            max={10}
            step={1}
            allowOverlap
            snapped
          />
        </View>
        <Text style={styles.text}>Native RCT Slider</Text>
        <Slider style={{width: 280,}}/>
        <Text style={styles.text}>Custom Marker</Text>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliders: {
    margin: 20,
    width: 280,
  },
  text: {
    alignSelf: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});