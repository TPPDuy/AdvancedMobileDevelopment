import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ForgotPassword from './src/components/authen/forgot-password';
import SignUp from './src/components/authen/sign-up';
import SignIn from './src/components/authen/sign-in';
import SectionCourse from './src/components/home/SectionCourse';
import Home from './src/components/home';
import DetailCategory from './src/components/home/DetailCategory';
import ItemCategory from './src/components/browse/ItemCategory';
import Browse from './src/components/browse';
import CourseDetails from './src/components/course-detail/CourseDetails';

function App() {
  return (
      <View style={styles.container}>
        <CourseDetails />
      </View>
  );
}

const white = '#FFF';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: white,
    flexDirection: 'column',
    flex: 1,
    paddingTop: 50,
  },
});

registerRootComponent(App);

export default App;
