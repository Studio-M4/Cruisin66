import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight,ScrollView } from 'react-native';


export default class Login extends React.Component {

    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
        this.state = {
        email: 'Your email',
        password: 'Your password',
        };
    }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            {/* Crunin'66 */}
          </Text>
          <View>
            <Image style={styles.imagesStyle} source={require('../imgs/icon.png')} />
          </View>
          <View style={styles.formStyle}>
          
            <TextInput
              style={styles.inputStyle}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              style={styles.inputStyle}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />

            <TouchableHighlight
              style={styles.button}
              // onPress={this.onPress}
              onPress={() => this.props.navigation.navigate('Home')}
              >
              <Text style={styles.buttonTextColor}> LOGIN </Text>
            </TouchableHighlight>

             <TouchableHighlight
              style={styles.button}
              // onPress={this.onPress}
              onPress={() => this.props.navigation.navigate('Details')}
              >
              <Text style={styles.buttonTextColor}> SIGN UP </Text>
            </TouchableHighlight>
          </View>

        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    width: '100%',
    borderColor: '#000',
    height: '100%'
  },
  imagesStyle: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: "#000",
    marginTop: 20
  },
  inputStyle: {
    height: 40,
    width: 300,
    borderColor: '#ccc',
    borderWidth: 0.4,
    paddingLeft: 10,
    marginTop: 10
  },
  formStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    borderColor: '#000',
    height: "auto",
    paddingBottom: 20,
    paddingTop: 21
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#336699',
    marginTop: 20,
    padding: 10,
    width: 300,
  },
  buttonTextColor: {
    color: '#fff',
  }
});
