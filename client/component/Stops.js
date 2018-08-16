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
      itinerayId: null, 
      modalVisible: false
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    // This is passed from Itinerary component.
    const itinerayId = navigation.getParam('itinerary').id;
    this.setState({ itinerayId });
  }

  getStopsById = () => {
    return fetch('http://localhost:3000/stops', {
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
            data={[
              {
                id: 1,
                name: "Taipei 101",
                description: "Come here for a spectacular view. Best time is at sunset!",
                url: "http://images.skyscrapercenter.com/building/tapei101_ext-main2_(c)taipeifinancial.jpg",
              },
              {
                id: 2,
                name: "Taroko National Park",
                description: 'My favorite site is the Eternal Spring Shrine!',
                url: "http://www.thelostpassport.com/wp-content/uploads/2016/09/Overlooking-the-river-in-Taroko-Gorge-National-Park.jpg",
              },

              {
                id: 6,
                title: "accusamus ea aliquid et amet sequi nemo",
                url: "http://placehold.it/600/56a8c2",
                thumbnailUrl: "http://placehold.it/150/56a8c2"
              }
            ]}
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
                  {/* <CardItem cardBody >
                    <Image
                      source={{ uri: item.url }}
                      style={{ height: 200, width: null, flex: 1 }}
                    />
                    <Text>{item.name}</Text>
                    <Text>{item.description}</Text>
                  </CardItem> */}
                  {/* <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 Comments</Text>
                      </Button>
                    </Body>
                    <Right>
                      <Text>11h ago</Text>
                    </Right>
                  </CardItem> */}
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
                this.props.navigation.navigate("CreateStop", {itineraryId: this.state.itinerayId})
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
