import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

const Logo = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={require('../../assets/logo_fiap.png')} style={styles.logo} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 120,
    resizeMode: 'contain',
  },
});

export default Logo;
