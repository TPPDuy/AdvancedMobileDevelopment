import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ForgotPassword from './src/components/authen/forgot-password';
import SignUp from './src/components/authen/sign-up';

function App() {
  return (
    <View style={styles.container}>
      <ForgotPassword/>
    </View>
  );
}

const white = '#FFF';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
  },
});

registerRootComponent(App);

export default App;
