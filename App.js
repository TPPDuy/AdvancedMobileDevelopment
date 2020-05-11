import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignIn from './src/components/authen/sign-in';

function App() {
  return (
    <View style={styles.container}>
      <SignIn />
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
