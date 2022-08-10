import {View, Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Title = ({title}) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.projectName}>Project Name</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
