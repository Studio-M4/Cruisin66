import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TextInput,
  ImageBackground,
  TouchableHighlight,
  ScrollView,
  Modal
} from "react-native";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title,
  Footer,
  Item,
  Input,
  FooterTab
} from "native-base";

class Stops extends React.Component {
  static navigationOptions = {
    title: "Stops",

    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="add Stop"
        color="#000"
      />
    )
  };
  constructor(props) {
    super(props);
    this.state = {
      itineraryId: null, 
      modalVisible: false,
      stops: []
    };
  }

  componentWillMount() {
    const { navigation } = this.props;
    // This is passed from Itinerary component.
    const itineraryId = navigation.getParam('itinerary').id;
    console.log(navigation);
    this.setState({ itineraryId });
  }

  componentDidMount() {
    this.getStopsById();
  }

  getStopsById = () => {
    // const params = {
    //   itineraryId: this.state.itineraryId
    // };
    
    // var esc = encodeURIComponent;
    // var query = Object.keys(params)
    //     .map(k => esc(k) + '=' + esc(params[k]))
    //     .join('&');

    // let url = `http://localhost:3000/stop?${query}`;
    // console.log(url);

    // return fetch(url, {
    return fetch('http://localhost:3000/stops', {
      method: 'GET', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      if (response.error) {
        console.log(response.error);
      } else {
        return response.json();
      }
    })
    .then(data => {
      console.log('stops', data);
      this.setState({
        stops: data
      })
    })
    .catch((error) => {
      console.log(error)
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <CardItem cardBody>
            <ImageBackground
              source={{ uri: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/3c/e1/38/shutterstock-425692558.jpg' }}
              style={{ height: 200, width: null, flex: 1 }}
            >
            <Text style={styles.tourname}>Taiwan 101</Text>
            </ImageBackground>
          </CardItem>
          <FlatList
            // data={[
            //   {
            //     id: 1,
            //     name: "Taipei 101",
            //     description: "Come here for a spectacular view. Best time is at sunset!",
            //     url: "http://images.skyscrapercenter.com/building/tapei101_ext-main2_(c)taipeifinancial.jpg",
            //   },
            //   {
            //     id: 2,
            //     name: "Taroko National Park",
            //     description: 'My favorite site is the Eternal Spring Shrine!',
            //     url: "http://www.thelostpassport.com/wp-content/uploads/2016/09/Overlooking-the-river-in-Taroko-Gorge-National-Park.jpg",
            //   },

            //   {
            //     id: 6,
            //     title: "accusamus ea aliquid et amet sequi nemo",
            //     url: "http://placehold.it/600/56a8c2",
            //     thumbnailUrl: "http://placehold.it/150/56a8c2"
            //   }
            // ]}
            data = {this.state.stops}
            
            renderItem={({ item }) => (
              <TouchableHighlight
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate("Details", {
                    item: item
                  });
                }}
              >
                <Card>
                  <CardItem>
                    <Left>
                      <Thumbnail square style={{width: 75, height: 75}} source={{ uri: item.url }} />
                      <Body>
                        <Text>{item.name}</Text>
                        <Text note>{item.description}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                </Card>
              </TouchableHighlight>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button
              onPress={() => {
                /* 1. Navigate map and see the direction */
                this.props.navigation.navigate("CreateStop", {itineraryId: this.state.itineraryId})
              }}
            >
              <Icon name="add" />
            </Button>
            <Button
              onPress={() => {
                /* 1. Navigate map and see the direction */
                this.props.navigation.navigate("MapComponent");
              }}
            >
              <Icon name="navigate" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tourname: {
    color: '#fff',
    textAlign: 'center',
    marginTop:90,
    fontSize:30,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
});


export default Stops;
