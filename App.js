import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignUp from './src/components/authen/sign-up';

function App() {
  return (
    <View style={styles.container}>
      <SignUp />
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
