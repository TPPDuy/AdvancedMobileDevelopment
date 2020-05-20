import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import ForgotPassword from './src/components/authen/forgot-password';
import SignUp from './src/components/authen/sign-up';
import SignIn from './src/components/authen/sign-in';
import SectionCourse from './src/components/home/SectionCourse';
import Home from './src/components/home';
import ItemCategory from './src/components/browse/ItemCategory';
import Browse from './src/components/browse';
import CourseDetails from './src/components/course-detail/index';
import Module from './src/components/course-detail/ItemContent';
import AuthorProfile from './src/components/author-profile';


function App() {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <AuthorProfile />
      </SafeAreaView>
  );
}

const white = '#FFF';
const black = '#000';

const styles = StyleSheet.create({
  container: {
    backgroundColor: black,
    flexDirection: 'column',
    flex: 1,
    height: '100%',
  },
});

registerRootComponent(App);

export default App;
