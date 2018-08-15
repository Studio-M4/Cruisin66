import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, ScrollView, Button } from 'react-native';
import Tcomb from 'tcomb-form-native';

const { Form } = Tcomb.form;

/**
 * Dropdown list options. Key of property is the actual returned value.
 * The actual data should be replaced by getCategories().
 */
let Category = Tcomb.enums({
  '1': 'Natural Scene',
  '2': 'Hitorical Sites',
  '3': 'Wine trips'
});
/**
 * Form storage object for 'tcomb-form-native'.
 */
const Itinerary = Tcomb.struct({
  name: Tcomb.String,
  description: Tcomb.String,
  category: Category
});

export default class CreateItinerary extends React.Component {
  static navigationOptions = {
    title: 'CreateItinerary'
  };

  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    const valuesObj = this._form.getValue();
    console.log('Form values: ', valuesObj);
    this.createItinerary(valuesObj)
        .then((itineraryId) => this.props.navigation.navigate('Stops', itineraryId))
        .catch((err) => console.log(err));
  }

  /**
   * Get all the categories from server.
   */
  getCategories = () => {
    return fetch('http://localhost:3000/categories', {
      method: 'GET', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      if (res.error) {
        throw res.error;
      }
      return res.json();
    })
    .catch((error) => {
      console.log(error)
    });
  }

  /**
   * Should be used to connect to endpoint for creating an Itinerary.
   * @param {object} params - parameters for post request
   */
  createItinerary = (params) => {
    return fetch('http://localhost:3000/itinerary', {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    })
    .then((res) => {
      if (res.error) {
        throw res.error;
      }
      // Should return itineraryID, so that we can pass it to Stops component.
      return 1; // 1 is a hardcoded itineraryId just for testing.
    })
    .catch((error) => {
      console.log(error)
    });
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
