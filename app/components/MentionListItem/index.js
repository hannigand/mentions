import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const MentionListItem = ({ name, username }) => (
  <TouchableOpacity>
    <Text>{name}</Text>
  </TouchableOpacity>
);

export default MentionListItem;
