import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import MentionListItem from '../MentionListItem';

const styles = StyleSheet.create({
  list: {
    width: 250,
    height: 400,
    borderWidth: 1,
    borderColor: 'red',
  },
});

const MentionList = ({ names, visible, onSelect }) => (
  <FlatList
    data={names}
    renderItem={({ item: { name, username } }) => (
      <MentionListItem name={name} username={username} onSelect={onSelect} />
    )}
    keyExtractor={name => name.username}
    style={[
      styles.list,
      {
        display: visible ? 'flex' : 'none',
      },
    ]}
  />
);

MentionList.propTypes = {
  names: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MentionList;
