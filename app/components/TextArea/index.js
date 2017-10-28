import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textarea: {
    flex: 1,
    borderWidth: 1,
  },
});

const TextArea = ({}) => <TextInput style={styles.textarea} multiline />;

export default TextArea;
