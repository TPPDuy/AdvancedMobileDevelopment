import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ForgotPassword from './src/components/authen/forgot-password';
import SignUp from './src/components/authen/sign-up';
import SignIn from './src/components/authen/sign-in';
import SectionCourse from './src/components/home/SectionCourse';
import Home from './src/components/home';
import ItemCourseCategory from './src/components/home/detail-category/ItemCourseCategory';
import DetailCategory from './src/components/home/detail-category/DetailCategory';

function App() {
  return (
      <View style={styles.container}>
        <DetailCategory />
      </View>
  );
}

const white = '#FFF';
const dark = '#000';

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
