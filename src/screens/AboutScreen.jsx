import React from 'react';
import { View, Text } from 'react-native';
// import MainLayout from '../layouts/MainLayout';



const AboutScreen = () => {
  return (
    <View>
        {/* <MainLayout> */}
      <Text>App Name: My To-Do App</Text>
      <Text>Your Name: jinsun yu</Text>
      <Text>Date: {new Date().toLocaleDateString()}</Text>
      {/* </MainLayout> */}
    </View>
  );
};

export default AboutScreen;