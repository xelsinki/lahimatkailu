import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View } from 'react-native';
import CheckBox from 'react-native-checkbox';
// style
import { styles } from '../checkboxes';

import { checkboxActions } from '../../_actions';

export class CheckBoxes extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      this.props.checkbox.values !== nextProps.checkbox.values &&
      (nextProps.navigation.index === 1 || nextProps.navigation.index === 2)
    ) {
      return true;
    }
    return false;
  }

  render() {
    const { style } = this.props;
    const { dispatch, checkbox } = this.props;

    return (
      <View checked={checkbox.values} style={style ? style : styles.container}>
        <CheckBox
          labelStyle={styles.label}
          labelBefore
          label={this.context.t('food')}
          checked={checkbox.values.food}
          onChange={val => dispatch(checkboxActions.updateValues({ ...checkbox.values, food: !val }))}
        />
        <CheckBox
          labelStyle={styles.label}
          labelBefore
          label={this.context.t('sight')}
          checked={checkbox.values.sight}
          onChange={val => dispatch(checkboxActions.updateValues({ ...checkbox.values, sight: !val }))}
        />
        <CheckBox
          labelStyle={styles.label}
          labelBefore
          label={this.context.t('service')}
          checked={checkbox.values.service}
          onChange={val =>
            dispatch(
              checkboxActions.updateValues({
                ...checkbox.values,
                service: !val
              })
            )
          }
        />
      </View>
    );
  }
}

CheckBoxes.contextTypes = {
  t: PropTypes.func.isRequired
};

CheckBoxes.propTypes = {
  checkbox: PropTypes.object.isRequired,
  style: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};
