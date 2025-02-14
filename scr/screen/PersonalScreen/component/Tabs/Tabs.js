import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {COLORS} from '../../../../assets/theme/Theme';
import {Responsive} from '../../../../assets/theme/Layout';
import Feed from './Feed';
import Streams from './Streams';
import Tags from './Tags';
import Info from './Info';

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator style={styles.tabstlyle}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Streams" component={Streams} />
      <Tab.Screen name="Tags" component={Tags} />
      <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabstlyle: {
    marginTop: Responsive.height(-60),
    borderColor: COLORS.charcoalGrey,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
