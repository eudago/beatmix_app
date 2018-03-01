import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 50,
    backgroundColor: '#ededed',
    marginVertical: 10
  }
});

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  render() {
    const navigation = this.props.navigation;
    let platformStyles;
    if (Platform.OS === "ios") {
      platformStyles = { borderColor: "rgba(136, 145, 181, 1)", color: "rgba(1, 23, 65, 1)" };
    } else {
      platformStyles = { color: "rgba(1, 23, 65, 1)" };
    }

    return (
      <View style={styles.container}>
        <View style={{padding: 10}}>
          <TextInput
            style={[styles.input, platformStyles]}
            multiline={false}
            placeholder={'User'}
            placeholderTextColor={"rgba(136, 145, 181, 1)"}
            underlineColorAndroid={"rgba(136, 145, 181, 1)"}
            onEndEditing={event => console.log(event.nativeEvent.text)}
          />
        </View>
        <View style={{padding: 10}}>
          <TextInput
            style={[styles.input, platformStyles]}
            multiline={false}
            secureTextEntry={true}
            placeholder={'Password'}
            placeholderTextColor={"rgba(136, 145, 181, 1)"}
            underlineColorAndroid={"rgba(136, 145, 181, 1)"}
            onEndEditing={event => console.log(event.nativeEvent.text)}
          />
        </View>
        <Button
          onPress={() => navigation.dispatch({ type: 'Login' })}
          title="Sign Up"
        />
        <Button
          onPress={() => navigation.dispatch({ type: 'Login' })}
          title="Log in"
        />
      </View>
    );
  }
};

SignUp.propTypes = {
  navigation: PropTypes.object.isRequired,
};

SignUp.navigationOptions = {
  title: 'Sign Up',
};
