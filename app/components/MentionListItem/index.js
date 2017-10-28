import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    backgroundColor: 'white',
  },
});

const MentionListItem = ({ name, username, onSelect }) => (
  <TouchableOpacity onPress={() => onSelect(username)} style={styles.listItem}>
    <Text>{name}</Text>
  </TouchableOpacity>
);

MentionListItem.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default MentionListItem;
