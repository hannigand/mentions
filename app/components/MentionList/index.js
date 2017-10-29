import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import MentionListItem from '../MentionListItem';

const styles = StyleSheet.create({
  list: {
    maxHeight: 300,
    width: 200,
    borderWidth: 1,
    borderColor: 'red',
    position: 'absolute',
  },
});

const MentionList = ({
  names,
  visible,
  onSelect,
  position: { xPos, yPos },
}) => (
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
        bottom: yPos,
        right: xPos,
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
