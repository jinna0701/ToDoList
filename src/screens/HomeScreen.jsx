import React from 'react';
import { View, Text, Button } from 'react-native';
// import MainLayout from '../layouts/MainLayout';



const HomeScreen = ({ navigation }) => {
  return (
    // <MainLayout>
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
    // </MainLayout>
  );
};

export default HomeScreen;