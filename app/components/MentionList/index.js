import React from 'react';
import { FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

import MentionListItem from '../MentionListItem';

const MentionList = ({ names }) => (
  <FlatList
    data={names}
    renderItem={({ item: { name, username } }) => (
      <MentionListItem name={name} username={username} />
    )}
    keyExtractor={name => name.username}
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
