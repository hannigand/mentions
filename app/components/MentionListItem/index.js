import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const MentionListItem = ({ name, username }) => (
  <TouchableOpacity>
    <Text>{name}</Text>
  </TouchableOpacity>
);

MentionListItem.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default MentionListItem;
