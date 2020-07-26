/* eslint-disable no-console */
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
  StyleSheet, StatusBar, SafeAreaView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Home from './src/components/home';
import CourseDetails from './src/components/course-detail/index';
import Browse from './src/components/browse';
import Search from './src/components/search';
import screenName from './src/constants/screen-name';
import AllCourses from './src/components/all-courses/AllCourses';
import AuthorProfile from './src/components/author-profile/index';
import CategoryListDetails from './src/components/category/CategoryListDetails';
import SignIn from './src/components/authen/sign-in';
import SignUp from './src/components/authen/sign-up';
import ForgotPassword from './src/components/authen/forgot-password';
import themes, { ThemeContext } from './src/constants/theme';
import { AuthenProvider } from './src/components/providers/Authen';
import { HomeProvider } from './src/components/providers/Home';
import { getTheme, storeTheme } from './src/storage/Storage';
import { BrowseProvider } from './src/components/providers/Browse';
import { AuthorProvider } from './src/components/providers/Author';
import Splash from './src/components/splash/Splash';
import { FavoriteProvider } from './src/components/providers/Favorite';
import Favorite from './src/components/favorites/Favorite';

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
            options={{ title: 'Trang chủ', headerTitleAlign: 'left' }}
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
            options={{ title: 'Khám phá', headerTitleAlign: 'left' }}
          />
          <Stack.Screen
            name={screenName.CategoryListDetails}
            component={CategoryListDetails}
            options={{ headerShown: false }}
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
            name={screenName.AuthorProfile}
            component={AuthorProfile}
          />
        </Stack.Navigator>
      )
    }
  </ThemeContext.Consumer>
);
const FavoriteScreen = () => (
  <ThemeContext.Consumer>
  {
    ({ theme }) => (
      <FavoriteProvider>
        <Stack.Navigator
          initialRouteName={screenName.FavoriteScreen}
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
            name={screenName.FavoriteScreen}
            component={Favorite}
            options={{ title: 'Yêu thích', headerTitleAlign: 'left' }}
          />
          <Stack.Screen
            name={screenName.CourseDetails}
            component={CourseDetails}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </FavoriteProvider>
    )
  }
  </ThemeContext.Consumer>
);
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
                  } else if (route.name === screenName.FavoriteScreen) {
                    iconName = 'staro';
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
          <Tab.Screen name={screenName.FavoriteScreen} component={FavoriteScreen}/>
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
  const changeTheme = (value) => {
    setTheme(value);
    storeTheme(value);
  };
  const themeInfo = getTheme();
  useEffect(() => {
    console.disableYellowBox = true;
    StatusBar.setHidden(true, 'none');
    themeInfo.then(
      (res) => {
        if (res !== null) setTheme(res);
      },
    );
  }, []);

  return (
    <HomeProvider>
      <BrowseProvider>
        <AuthorProvider>
          <ThemeContext.Provider value={{ theme, changeTheme }}>
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
                  <Stack.Screen name={screenName.Splash} component={Splash}/>
                  <Stack.Screen name={screenName.Authen} component={AuthenScreens}/>
                  <Stack.Screen name={screenName.Main} component={MainScreens}/>
                </Stack.Navigator>
              </SafeAreaView>
            </NavigationContainer>
          </ThemeContext.Provider>
        </AuthorProvider>
      </BrowseProvider>
    </HomeProvider>
  );
}

registerRootComponent(App);

export default App;
