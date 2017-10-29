import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Keyboard } from 'react-native';
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
    backgroundColor: '#ecf0f1',
    borderWidth: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

class Main extends Component {
  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
  }
  componentWillUnmount() {
    Keyboard.removeListener('keyboardDidShow', this.keyboardDidShow);
  }
  keyboardDidShow = e => {
    const { changePosition } = this.props;
    const { endCoordinates: { height } } = e;
    changePosition(height);
  };
  render() {
    const {
      filteredNames: names,
      recordKeyPress,
      textareaValue,
      isMentionListVisible,
      addMention,
      position,
    } = this.props;
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="always"
      >
        <TextArea value={textareaValue} onChangeText={recordKeyPress} />
        <MentionList
          names={names}
          visible={isMentionListVisible}
          onSelect={addMention}
          position={position}
        />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
