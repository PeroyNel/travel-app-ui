import React from 'react';
import colours from '../assets/colours/colours';
import { View, Text,Button, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';
import activitiesData from '../assets/data/activitiesData';
import discoverData from '../assets/data/discoverData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import learnMoreData from '../assets/data/learnMoreData';

const Home = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <ScrollView>
          {/* Header */}
        </ScrollView>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colours.white,
  },
});

export default Home;