import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform
} from 'react-native';
import { login } from '../actions/auth';

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

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pass: '',
      email: ''
    };
  }

  login() {
    this.props.dispatch(login(this.state.email, this.state.pass));
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={{padding: 10}}>
          <TextInput
            style={styles.input}
            multiline={false}
            placeholder={'User'}
            placeholderTextColor={"rgba(136, 145, 181, 1)"}
            underlineColorAndroid={"rgba(136, 145, 181, 1)"}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
        </View>
        <View style={{padding: 10}}>
          <TextInput
          style={styles.input}
            multiline={false}
            secureTextEntry={true}
            placeholder={'Password'}
            placeholderTextColor={"rgba(136, 145, 181, 1)"}
            underlineColorAndroid={"rgba(136, 145, 181, 1)"}
            onChangeText={(pass) => this.setState({pass})}
            value={this.state.pass}
          />
        </View>
        <Button
          onPress={() => {this.login()}}
          title="Log in"
        />
        <Button
          onPress={() => navigation.dispatch({ type: 'SignUp' })}
          title="Sign Up"
        />
      </View>
    );
  }
};

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginScreen);
