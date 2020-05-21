/* eslint-disable react/display-name */
/* eslint-disable import/no-extraneous-dependencies */
import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StyleSheet, View, StatusBar, SafeAreaView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Home from './src/components/home';
import Browse from './src/components/browse';
import Search from './src/components/search';
import screenName from './src/constants/screen-name';
import colorSource from './src/constants/color';

const HomeScreen = () => (<Home/>);
const DownloadScreen = () => (<View/>);
const BrowseScreen = () => (<Browse/>);
const SearchScreen = () => (<Search/>);

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === screenName.HomeScreen) {
                iconName = 'home';
              } else if (route.name === screenName.DownloadScreen) {
                iconName = 'clouddownloado';
              } else if (route.name === screenName.BrowseScreen) {
                iconName = 'find';
              } else {
                iconName = 'search1';
              }
              // You can return any component that you like here!
              return <AntDesign name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: colorSource.purple,
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name={screenName.HomeScreen} component={HomeScreen}/>
          <Tab.Screen name={screenName.DownloadScreen} component={DownloadScreen}/>
          <Tab.Screen name={screenName.BrowseScreen} component={BrowseScreen}/>
          <Tab.Screen name={screenName.SearchScreen} component={SearchScreen}/>
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const white = '#FFF';
const black = '#000';

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flexDirection: 'column',
    flex: 1,
    height: '100%',
  },
});

registerRootComponent(App);

export default App;
