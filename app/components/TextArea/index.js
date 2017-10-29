import React, { Component } from 'react';
import { TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },
  textarea: {
    flex: 1,
    borderWidth: 1,
    fontSize: 16,
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
      <KeyboardAvoidingView behavior="height" style={styles.wrapper}>
        <TextInput
          style={styles.textarea}
          multiline
          onChangeText={onChangeText}
          value={value}
          ref={textarea => (this.textarea = textarea)}
          onSelectionChange={e => {
            console.log(e.nativeEvent.selection);
            this.textarea.measure((x, y, width, height, pageX, pageY) =>
              console.log(x, y, width, height, pageX, pageY),
            );
          }}
        />
      </KeyboardAvoidingView>
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
