import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import TabNavigator from "react-native-tab-navigator";
import CreateRoom from './CreateRoom';
import { connect } from 'react-redux';
import { switchTab } from '../../actions/main';

class MainScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  onTabSelect(tab) {
    if (this.props.tab !== tab) {
      this.props.onTabSelect(tab);
    }
  }

  render() {
    return (
      <TabNavigator tabBarStyle={styles.tabBar}>
        <TabNavigator.Item
          title="Create Room"
          selected={this.props.tab === 'create_room'}
          titleStyle={styles.tabTitle}
          selectedTitleStyle={styles.tabTitleActive}
          onPress={this.onTabSelect.bind(this, "create_room")}
        >
          <CreateRoom></CreateRoom>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="Settings"
          selected={this.props.tab === 'settings'}
          titleStyle={styles.tabTitle}
          selectedTitleStyle={styles.tabTitleActive}
          onPress={this.onTabSelect.bind(this, "settings")}
        >
          <CreateRoom></CreateRoom>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  tabTitle: {
    backgroundColor: "transparent",
    fontSize: 10,
  },
  tabTitleActive: {
    color: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    backgroundColor: '#ededed',
    marginVertical: 10
  }
});

const select = (store) => ({
  tab: store.main.tab,
});

const mapDispatchToProps = (dispatch) => ({
  onTabSelect: tab => dispatch(switchTab(tab))
});

export default connect(
  select,
  mapDispatchToProps,
)(MainScreen);
