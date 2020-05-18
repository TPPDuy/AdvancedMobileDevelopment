import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ForgotPassword from './src/components/authen/forgot-password';
import SignUp from './src/components/authen/sign-up';
import SignIn from './src/components/authen/sign-in';
import SectionCourse from './src/components/home/SectionCourse';
import Home from './src/components/home';
import ItemCategory from './src/components/browse/ItemCategory';
import Browse from './src/components/browse';
import CourseDetails from './src/components/course-detail/CourseDetails';
import Module from './src/components/course-detail/ItemContent';
import AuthorProfile from './src/components/author-profile/AuthorProfile';

function App() {
  return (
      <View style={styles.container}>
        <AuthorProfile />
      </View>
  );
}

const white = '#FFF';

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flexDirection: 'column',
    flex: 1,
    height: '100%',
    paddingTop: 50,
  },
});

registerRootComponent(App);

export default App;
