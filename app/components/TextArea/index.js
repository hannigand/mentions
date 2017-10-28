import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textarea: {
    flex: 1,
    borderWidth: 1,
  },
});

const TextArea = ({ value, onChangeText }) => (
  <TextInput
    style={styles.textarea}
    multiline
    onChangeText={onChangeText}
    value={value}
  />
);

export default TextArea;
