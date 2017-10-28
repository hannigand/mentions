import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import TextArea from '../../components/TextArea';
import MentionList from '../../components/MentionList';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#ecf0f1',
  },
});

const Main = ({
  filteredNames: names,
  recordKeyPress,
  textareaValue,
  isMentionListVisible,
  addMention,
}) => (
  <View style={styles.container}>
    <TextArea value={textareaValue} onChangeText={recordKeyPress} />
    <MentionList
      names={names}
      visible={isMentionListVisible}
      onSelect={addMention}
    />
  </View>
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
