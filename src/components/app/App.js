// src/components/app/App.js

import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import AddToUserList from '../userList/addToUserList';
import Register from '../auth/Register';
import Login from '../auth/Login';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.users.isAuthenticated);
  const [showLogin, setShowLogin] = useState(true);

  const toggleAuthComponent = () => {
    setShowLogin(!showLogin);
  };

  return (
    <View style={styles.container}>
      <Text>Your home page is loading enough to render this text!</Text>
      <StatusBar style="auto" />
      {isAuthenticated ? (
        <>
          <AddToUserList />
          {/* Add other authenticated components here */}
        </>
      ) : (
        <>
          {showLogin ? <Login /> : <Register />}
          <Button
            title={showLogin ? "Switch to Register" : "Switch to Login"}
            onPress={toggleAuthComponent}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;