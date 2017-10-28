import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textarea: {
    flex: 1,
    borderWidth: 1,
  },
});

const TextArea = ({ textareaValue, onChangeText }) => (
  <TextInput
    style={styles.textarea}
    multiline
    onChangeText={onChangeText}
    value={textareaValue}
  />
);

export default TextArea;
