/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable global-require */
/* eslint-disable react/display-name */
/* eslint-disable import/no-extraneous-dependencies */
import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, StatusBar, SafeAreaView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Home from './src/components/home';
import CourseDetails from './src/components/course-detail/index';
import Browse from './src/components/browse';
import Search from './src/components/search';
import screenName from './src/constants/screen-name';
import AllCourses from './src/components/all-courses/AllCourses';
import AuthorProfile from './src/components/author-profile/index';
import SkillDetails from './src/components/skill';
import CategoryDetails from './src/components/category/CategoryDetails';
import CategoryListDetails from './src/components/category/CategoryListDetails';
import ListGroupPaths from './src/components/path/ListGroupPaths';
import ListPaths from './src/components/path/ListPaths';
import PathDetails from './src/components/path/PathDetails';
import SignIn from './src/components/authen/sign-in';
import SignUp from './src/components/authen/sign-up';
import ForgotPassword from './src/components/authen/forgot-password';
import themes, { ThemeContext } from './src/constants/theme';
import { AuthenProvider } from './src/components/providers/Authen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const AuthenScreens = () => (
  <AuthenProvider>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screenName.SignIn} component={SignIn}/>
      <Stack.Screen name={screenName.SignUp} component={SignUp}/>
      <Stack.Screen name={screenName.ForgotPass} component={ForgotPassword}/>
    </Stack.Navigator>
  </AuthenProvider>
);
const HomeScreen = () => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => (
          <Stack.Navigator
          initialRouteName={screenName.ListCourses}
          screenOptions={
            {
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: '500',
                color: theme.textColor,
              },
              headerStyle: {
                backgroundColor: theme.headerBackground,
              },
              headerTintColor: theme.textColor,
            }
          }>
          <Stack.Screen
            name={screenName.ListCourses}
            component={Home}
            options={{ title: 'Home', headerTitleAlign: 'left' }}
          />
          <Stack.Screen
            name={screenName.AllCourses}
            component={AllCourses}
            options={{ title: '' }}
          />
          <Stack.Screen
            name={screenName.CourseDetails}
            component={CourseDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={screenName.AuthorProfile}
            component={AuthorProfile}
          />
        </Stack.Navigator>
      )
    }
  </ThemeContext.Consumer>

);
const BrowseScreen = () => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => (
        <Stack.Navigator
          initialRouteName={screenName.Browse}
          screenOptions={
            {
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: '500',
                color: theme.textColor,
              },
              headerStyle: {
                backgroundColor: theme.headerBackground,
              },
              headerTintColor: theme.textColor,
            }
          }>
          <Stack.Screen
            name={screenName.Browse}
            component={Browse}
            options={{ title: 'Browse', headerTitleAlign: 'left' }}
          />
          <Stack.Screen
            name={screenName.CourseDetails}
            component={CourseDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={screenName.AllCourses}
            component={AllCourses}
            options={{ title: '' }}
          />
          <Stack.Screen
            name={screenName.CategoryDetails}
            component={CategoryDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={screenName.CategoryListDetails}
            component={CategoryListDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={screenName.SkillDetails}
            component={SkillDetails}
            options={{ title: 'Details' }}
          />
          <Stack.Screen
            name={screenName.AuthorProfile}
            component={AuthorProfile}
          />
          <Stack.Screen
            name={screenName.ListGroupPaths}
            component={ListGroupPaths}
            options={{ title: 'Paths' }}
          />
          <Stack.Screen
            name={screenName.ListPaths}
            component={ListPaths}
            options={{ title: 'Paths' }}
          />
          <Stack.Screen
            name={screenName.PathDetails}
            component={PathDetails}
            options={{ title: 'Details' }}
          />
        </Stack.Navigator>
      )
    }
  </ThemeContext.Consumer>
);
const DownloadScreen = () => (<View/>);
const SearchScreen = () => (<Search/>);

const MainScreens = () => (
  <ThemeContext>
    {
      ({ theme }) => (
        <Tab.Navigator
          screenOptions = {
            ({ route }) => (
              {
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
                  return <AntDesign name={iconName} size={size} color={color} />;
                },
              }
            )
          }
          tabBarOptions={{
            activeTintColor: '#2378ff',
            inactiveTintColor: 'gray',
            style: {
              backgroundColor: theme.headerBackground,
              borderTopWidth: 0,
            },
          }}>
          <Tab.Screen name={screenName.HomeScreen} component={HomeScreen}/>
          <Tab.Screen name={screenName.DownloadScreen} component={DownloadScreen}/>
          <Tab.Screen name={screenName.BrowseScreen} component={BrowseScreen}/>
          <Tab.Screen name={screenName.SearchScreen} component={SearchScreen}/>
        </Tab.Navigator>
      )
    }
  </ThemeContext>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    height: '100%',
  },
});

function App() {
  const [theme, setTheme] = useState(themes.dark);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavigationContainer>
        <SafeAreaView
          style={
            {
              ...styles.container,
              backgroundColor: theme.background,
              color: theme.textColor,
            }
          }>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screenName.Authen} component={AuthenScreens}/>
            <Stack.Screen name={screenName.Main} component={MainScreens}/>
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

registerRootComponent(App);

export default App;
