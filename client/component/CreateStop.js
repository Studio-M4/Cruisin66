import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, ScrollView, Button, CameraRoll } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default class CreateStop extends React.Component {
  static navigationOptions = {
    title: "CreateStop"
  };
  constructor(props) {
    super(props);
    this.state = {
      photos: [], 
      ItineraryID: null, 
      address: null,
      description: null
    };
  }

  handleSubmit = () => {
    //createStop();
    this.props.navigation.navigate('Stops', { id: {}});
  }

  /**
   * Should be used to connect to endpoint for creating a Stop.
   * @param {object} params - parameters for post request
   */
  createStop = (params) => {
    return fetch('http://localhost:3000/stop', {
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
      // Should send ItineraryID to Stops component.
      this.props.navigation.navigate('Stops', { id: res.json().id });
    })
    .catch((error) => {
      console.log(error)
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed="auto" // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
              this.setState({address: data.description});
            }}
            getDefaultValue={() => ""}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: "AIzaSyBHNIOJemEkEyO4gI_hask8BO6bJno9Q58",
              language: "en", // language of the results
              types: "" // default: 'geocode'
            }}
            styles={{
              textInputContainer: {
                width: "100%"
              },
              description: {
                fontWeight: "bold"
              },
              predefinedPlacesDescription: {
                color: "#1faadb"
              }
            }}
            nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={
              {
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
              }
            }
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: "distance",
              types: "food"
            }}
            filterReverseGeocodingByTypes={[
              "locality",
              "administrative_area_level_3"
            ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            debounce={1000} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
          />
          <Text style={styles.title}> Description: </Text>
          <TextInput
            editable={true}
            multiline={true}
            numberOfLines={6}
            maxLength={100}
            placeholder={"What so special here?"}
            style={styles.inputStyle}
            onChangeText={description => this.setState({ description })}
            value={this.state.description}
          />
          <Button title="Create" onPress={this.handleSubmit}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    borderColor: "#000",
    height: "100%"
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginTop: 1
  },
  button: {
    alignItems: "center",
    backgroundColor: "#336699",
    marginTop: 20,
    padding: 10,
    width: 300
  },
  inputStyle: {
    height: 40,
    width: 300,
    borderColor: "#ccc",
    borderWidth: 0.4,
    paddingLeft: 10,
    marginTop: 10,
    backgroundColor: 'white'
  },
});
