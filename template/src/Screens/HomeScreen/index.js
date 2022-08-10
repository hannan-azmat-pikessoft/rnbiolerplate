import {View} from 'react-native';
import React from 'react';
import Title from '../../Components/Title';
import styles from './styles';
import Button from '../../Components/Button';
import {PROFILE} from '../../Constants/NavigationStrings';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title title="Welcome to React Native Home Screen!" />
      <Button
        mode="contained"
        icon="account"
        color="blue"
        onPress={() => navigation.navigate(PROFILE)}>
        Go to Profile Screen
      </Button>
    </View>
  );
};

export default HomeScreen;
