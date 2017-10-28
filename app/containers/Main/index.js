import React from 'react';
import { Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import MentionList from '../../components/MentionList';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const Main = ({ allNames }) => <MentionList names={allNames} />;

export default connect(mapStateToProps, mapDispatchToProps)(Main);
