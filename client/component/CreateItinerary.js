import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, ScrollView, Button } from 'react-native';
import Tcomb from 'tcomb-form-native';

const { Form } = Tcomb.form;
const Itinerary = Tcomb.struct({
  title: Tcomb.String,
  description: Tcomb.String,
  category: Tcomb.String
});

export default class CreateItinerary extends React.Component {
  static navigationOptions = {
    title: 'CreateItinerary'
  };

  constructor(props) {
    super(props);
    console.log('POOP');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const value = this._form.getValue();
    console.log('value: ', value);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Form 
            ref={ c => this._form = c}
            type={Itinerary} 
          />
          <Button 
            title='Create'
            onPress={this.handleSubmit}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 60
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#336699',
    marginTop: 20,
    padding: 10,
    width: 300
  }
});
