/* eslint-disable global-require */
/* eslint-disable react/display-name */
/* eslint-disable import/no-extraneous-dependencies */
import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet, View, StatusBar, SafeAreaView, Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Home from './src/components/home';
import CourseDetails from './src/components/course-detail/index';
import Browse from './src/components/browse';
import Search from './src/components/search';
import screenName from './src/constants/screen-name';
import colorSource from './src/constants/color';
import AllCourses from './src/components/all-courses/AllCourses';
import AuthorProfile from './src/components/author-profile/index';
import SkillDetails from './src/components/skill';
import CategoryDetails from './src/components/category/CategoryDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const renderHeaderRight = () => (
    <View style={styles.headerRightContainer}>
      <Image source={require('./assets/common/avatar-holder-icon.png')} style={styles.avatar}/>
      <Image source={require('./assets/common/menu-black-icon.png')} style={styles.menuIcon} />
    </View>
);

const HomeScreen = () => (
  <Stack.Navigator initialRouteName={screenName.ListCourses} screenOptions={{ headerTitleStyle: { fontSize: 20, fontWeight: '500' } }}>
    <Stack.Screen name={screenName.ListCourses} component={Home} options={{ title: 'Home', headerTitleAlign: 'left', headerRight: renderHeaderRight }}/>
    <Stack.Screen name={screenName.AllCourses} component={AllCourses} options={{ title: '' }}/>
    <Stack.Screen name={screenName.CourseDetails} component={CourseDetails} options={{ headerShown: false }}/>
    <Stack.Screen name={screenName.AuthorProfile} component={AuthorProfile}/>
  </Stack.Navigator>
);
const DownloadScreen = () => (<View/>);
const BrowseScreen = () => (
  <Stack.Navigator initialRouteName={screenName.Browse} screenOptions={{ headerTitleStyle: { fontSize: 20, fontWeight: '500' } }}>
    <Stack.Screen name={screenName.Browse} component={Browse} options={{ title: 'Browse', headerTitleAlign: 'left', headerRight: renderHeaderRight }}/>
    <Stack.Screen name={screenName.CourseDetails} component={CourseDetails} options={{ headerShown: false }}/>
    <Stack.Screen name={screenName.AllCourses} component={AllCourses} options={{ title: '' }}/>
    <Stack.Screen name={screenName.CategoryDetails} component={CategoryDetails} options={{headerShown: false}}/>
    <Stack.Screen name={screenName.SkillDetails} component={SkillDetails} />
    <Stack.Screen name={screenName.AuthorProfile} component={AuthorProfile}/>
  </Stack.Navigator>
);
const SearchScreen = () => (<Search/>);

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="default" />
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
            activeTintColor: '#ff6600',
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
  avatar: {
    height: 30,
    marginRight: 15,
    width: 30,
  },
  container: {
    backgroundColor: white,
    flexDirection: 'column',
    flex: 1,
    height: '100%',
  },
  headerRightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },
  menuIcon: {
    height: 18,
    width: 18,
  },
});

registerRootComponent(App);

export default App;
