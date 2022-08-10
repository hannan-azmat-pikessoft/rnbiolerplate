import {View} from 'react-native';
import React from 'react';
import Title from '../../Components/Title';
import Button from '../../Components/Button';
import {HOME} from '../../Constants/NavigationStrings';
import styles from './styles';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title title="Welcome to React Native Profile Screen!" />
      <Button onPress={() => navigation.navigate(HOME)}>
        Go to Home Screen
      </Button>
    </View>
  );
};

export default ProfileScreen;
