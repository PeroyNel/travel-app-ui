import React from 'react';
import colours from '../assets/colours/colours';
import { View, Text,Button, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import activitiesData from '../assets/data/activitiesData';
import discoverData from '../assets/data/discoverData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import learnMoreData from '../assets/data/learnMoreData';
import profile from '../assets/images/person.png';

Feather.loadFont();

const Home = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <ScrollView>
          {/* Header Section */}
          <SafeAreaView>
            <View style={styles.menuWrapper}>
              <Feather name="menu" size={32} color={colours.black} style={styles.menuIcon}/>
              <Image source={profile} style={styles.profileImage}/>

            </View>
          </SafeAreaView>
        </ScrollView>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colours.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
});

export default Home;