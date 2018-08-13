import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight,ScrollView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class CreateStop extends React.Component {
    static navigationOptions = {
        title: 'CreateStop',

    };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}> Stop: </Text>
            <GooglePlacesAutocomplete
              placeholder='Search'
              minLength={2} // minimum length of text to search
              autoFocus={false}
              returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
              listViewDisplayed='auto'    // true/false/undefined
              fetchDetails={true}
              renderDescription={row => row.description} // custom description render
              onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              
              getDefaultValue={() => ''}
              
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyBHNIOJemEkEyO4gI_hask8BO6bJno9Q58',
                language: 'en', // language of the results
                types: 'geocode' // default: 'geocode'
              }}
              
              styles={{
                textInputContainer: {
                  width: '100%'
                },
                description: {
                  fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                  color: '#1faadb'
                }
              }}
              
              nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
              GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
              }}
              GooglePlacesSearchQuery={{
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                rankby: 'distance',
                types: 'food'
              }}

              filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

              debounce={1000} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            />
            <Text style={styles.title}> Description: </Text>
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
 
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "#000",
    marginTop: 60
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#336699',
    marginTop: 20,
    padding: 10,
    width: 300,
  },
});
