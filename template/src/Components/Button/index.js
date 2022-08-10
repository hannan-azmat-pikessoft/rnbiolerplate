import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Button = ({children, onPress}) => {
  return (
    <View style={styles.buttonView}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
