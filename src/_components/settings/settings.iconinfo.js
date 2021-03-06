import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Text, Image, View, ScrollView } from 'react-native';
import { styles } from '../settings';
import { foodIcon, serviceIcon, sightIcon } from '../../_helpers';
import { IconSymbol } from '../settings';

export class SettingsIconInfo extends Component {
  renderIconSymbols = icons =>
    icons.map(icon => <IconSymbol key={icon} name={icon} translation={this.context.t(`${icon}`)} />);

  render() {
    const { icons } = this.props;

    return (
      <View style={styles.iconInfoView}>
        <Text style={styles.iconInfoHeading}>{this.context.t('iconLegend')}</Text>
        <ScrollView>
          <View style={styles.iconInfoRow}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={{ uri: foodIcon }} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.iconText}>{this.context.t('food')}</Text>
            </View>
          </View>
          <View style={styles.iconInfoRow}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={{ uri: sightIcon }} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.iconText}>{this.context.t('sight')}</Text>
            </View>
          </View>
          <View style={styles.iconInfoRow}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={{ uri: serviceIcon }} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.iconText}>{this.context.t('service')}</Text>
            </View>
          </View>
          {this.renderIconSymbols(icons)}
        </ScrollView>
      </View>
    );
  }
}

SettingsIconInfo.propTypes = {
  icons: PropTypes.array.isRequired
};

SettingsIconInfo.contextTypes = {
  t: PropTypes.func.isRequired
};
