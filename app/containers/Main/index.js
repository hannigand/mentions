import React from 'react';
import { Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const Main = () => <Text>Hello Main.js</Text>;

export default connect(mapStateToProps, mapDispatchToProps)(Main);
