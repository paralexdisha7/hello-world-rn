import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';

const AppPro = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.redText : styles.darkText}>
        AppPro
      </Text>
    </View>
  );
};

export default AppPro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redText: {
    color: '#ad2525',
  },
  darkText: {
    color: '#000',
  },
});
