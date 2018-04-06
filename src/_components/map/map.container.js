import React, { Component } from 'react';
import { DeviceEventEmitter } from 'react-native';
import RNALocation from 'react-native-android-location';
import { connect } from 'react-redux';

import { MapComponent, filter } from '../map';
import { dataActions, dimensionsActions, regionActions, userlocationActions } from '../../_actions';

class MapContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    const { region } = this.props.region;

    DeviceEventEmitter.addListener('updateLocation', function (e) {
      dispatch(userlocationActions.updateLocation(e));
    }.bind(this));

    RNALocation.getLocation();

    dispatch(dataActions.fetchDataByLocation(region));
    dispatch(dimensionsActions.getDimensions());
  }

  render() {
    return (<MapComponent {...this.props}/>);
  }
}

const mapStateToProps = state => ({
  data: filter(state.data.data, state.checkbox), 
  dimensions: state.dimensions, 
  region: state.region, 
  userlocation: state.userlocation,
  checkbox: state.checkbox,
});

export default connect(mapStateToProps)(MapContainer);