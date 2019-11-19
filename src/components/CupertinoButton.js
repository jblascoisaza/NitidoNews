import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function CupertinoButton(propse) {
  return (
    <TouchableOpacity style={[styles.container, propse.style]}>
      <Text style={styles.caption}>Auth</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 5,
  },
  caption: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'roboto-500',
  },
});
