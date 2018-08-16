import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Modal,
  FlatList
} from 'react-native';
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
  Item,
  Input
} from 'native-base';
import { NavigationEvents } from 'react-navigation';
import axios from 'axios';

export default class Itinerary extends React.Component {
  static navigationOptions = {
    title: 'Itinerary',
    headerStyle: {
      backgroundColor: '#f4511e'
    }
  };


  constructor(props) {
    super(props);

    this.state = {
      itineraries: []
    };

    this.getAllItineraries = this.getAllItineraries.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  getAllItineraries() {
    return axios
      .get('http://localhost:3000/itineraries')
      .then(res => this.setState({ itineraries: res.data }))
      .then(() => console.log(this.state.itineraries))
      .catch(err => console.log('GET itineraries error: ', err));
  }

  handleFocus() {
    this.getAllItineraries();
  }

  render() {
    return (
      <Container>
        <NavigationEvents
          onDidFocus={payload => this.handleFocus() }
        />
        <Header searchBar rounded>
          <Item>
            <Icon name='ios-search' />
            <Input placeholder='Search' />
            <Icon name='ios-people' />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content>
          <FlatList
            data={this.state.itineraries.map(itinerary => ({
              id: itinerary.id,
              name: itinerary.User ? itinerary.User.userName : '',
              notes: itinerary.description,
              itinerary: itinerary.name,
              url: itinerary.ItineraryPhotos[0] ? itinerary.ItineraryPhotos[0].url : 'http://placehold.it/600/24f355',
              thumbnailUrl: itinerary.User ? itinerary.User.photoAvatar : 'http://placehold.it/150/d32776',
            }))}
            renderItem={({ item }) => (
              <TouchableHighlight
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('Stops', {
                    itinerary: item
                  });
                }}
              >
                <Card>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{ uri: item.thumbnailUrl }} />
                      <Body>
                        <Text>{item.name}</Text>
                        <Text note>{item.notes}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <ImageBackground
                      source={{ uri: item.url }}
                      style={{ height: 200, width: null, flex: 1 }}
                    >
                      <Text style={styles.tourname}>{item.itinerary}</Text>
                    </ImageBackground>
                  </CardItem>
                  {/* <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon active name='thumbs-up' />
                        <Text>12 Likes</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent>
                        <Icon active name='chatbubbles' />
                        <Text
                          onPress={() => {
                             1. Navigate to the Details route with params 
                            this.props.navigation.navigate("CommentStop", {
                              itinerary: item
                            });
                          }}
                        >
                          4 Comments
                        </Text>
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
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    margin: 4,
    borderRadius: 5
  },
  container2: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: 4,
    borderRadius: 5,
    backgroundColor: '#eee'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 25,
    marginLeft: 4,
    width: '75%'
  },
  imagesStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20
  },
  imagesStyleModal: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20
  },
  textDesign: {
    width: '80%',
    color: '#333',
    marginBottom: 20
  },
  closeIt: {
    padding: 10,
    marginLeft: '80%',
    marginTop: 5
  },
  tourname: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 90,
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});
