import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ScrollView } from 'react-native';
import {
  SettingsDividerShort,
  SettingsDividerLong,
  SettingsEditText,
  SettingsCategoryHeader,
  SettingsSwitch,
  SettingsPicker
} from 'react-native-settings-components';

import { styles } from '../settings';

export class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allowPushNotifications: false,
      language: ''
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <SettingsCategoryHeader
          title={this.context.t('settings')}
          textStyle={styles.text}
        />
        <SettingsDividerLong android={false} />
        <SettingsDividerShort />
        <SettingsPicker
          title={this.context.t('lang')}
          dialogDescription={this.context.t('chooseLang')}
          possibleValues={[
            { label: '...', value: '' },
            { label: this.context.t('fi'), value: this.context.t('fi') },
            { label: this.context.t('en'), value: this.context.t('en') },
            { label: this.context.t('se'), value: this.context.t('se') },
            { label: this.context.t('ru'), value: this.context.t('ru') }
          ]}
          positiveButtonTitle={'Ok'}
          negativeButtonTitle={'Cancel'}
          onSaveValue={value => {
            this.props.changeLanguage(value);
          }}
          value={this.state.language}
          styleModalButtonsText={styles.text}
        />
        <SettingsSwitch
          title={'Allow Push Notifications'}
          onSaveValue={value => {
            this.setState({
              allowPushNotifications: value
            });
          }}
          value={this.state.allowPushNotifications}
          thumbTintColor={
            this.state.allowPushNotifications
              ? styles.switchEnabled
              : styles.switchDisabled
          }
        />
      </ScrollView>
    );
  }
}

Settings.contextTypes = {
  t: PropTypes.func.isRequired
};
