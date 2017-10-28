import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  textarea: {
    flex: 1,
    borderWidth: 1,
  },
});

class TextArea extends Component {
  componentDidUpdate(prevProps) {
    const { value: oldValue } = prevProps;
    const { value: newValue } = this.props;
    if (newValue !== oldValue) {
      this.textarea.focus();
    }
  }
  render() {
    const { value, onChangeText } = this.props;
    return (
      <TextInput
        style={styles.textarea}
        multiline
        onChangeText={onChangeText}
        value={value}
        ref={textarea => (this.textarea = textarea)}
        onSelectionChange={e => {
          console.log(e.nativeEvent.selection);
        }}
      />
    );
  }
}

TextArea.propTypes = {
  isMultiline: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
  isMultiline: true,
};

export default TextArea;
