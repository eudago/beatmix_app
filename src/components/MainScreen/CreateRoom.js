import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

export default class CreateRoom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pass: '',
      email: ''
    };
  }

  createRoom() {

  }

  joinRoom() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{padding: 10}}>
          <TextInput
          style={styles.input}
            multiline={false}
            secureTextEntry={true}
            placeholder={'room'}
            placeholderTextColor={"rgba(136, 145, 181, 1)"}
            underlineColorAndroid={"rgba(136, 145, 181, 1)"}
            onChangeText={(pass) => this.setState({pass})}
            value={this.state.pass}
          />
        </View>
        <Button
          onPress={() => {this.joinRoom()}}
          title="Join room"
        />
        <Button
          onPress={() => {this.createRoom()}}
          title="Create new room"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
