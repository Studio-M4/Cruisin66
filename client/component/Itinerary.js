import React from "react";
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
  Item,Input
} from "native-base";

export default class Itinerary extends React.Component {
  static navigationOptions = {
    title: "Itinerary",
    headerStyle: {
      backgroundColor: '#f4511e'
    }
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content>
          <FlatList
            data={[
              {
                albumId: 1,
                id: 1,
                name: "Henry",
                notes: 'from the land of pineapple cakes',
                itinerary: 'Taiwan 101',
                url: "https://www.worldatlas.com/r/w728-h425-c728x425/upload/3c/e1/38/shutterstock-425692558.jpg",
                thumbnailUrl: "https://avatars1.githubusercontent.com/u/37286505?s=460&v=4"
              },
              {
                albumId: 1,
                id: 2,
                name: "Julio",
                notes: 'likes to wear beanies',
                itinerary: 'Super cool tour name',
                url: "http://haitianhollywood.com/images/banners/Port-au-Prince.jpg",
                thumbnailUrl: "https://avatars3.githubusercontent.com/u/10291526?s=460&v=4"
              },
              {
                albumId: 1,
                id: 3,
                name: "Ningyi",
                notes: 'master pepper',
                itinerary: 'Bay Area Tour',
                url: "https://media-cdn.tripadvisor.com/media/photo-s/06/b2/0f/a6/golden-gate-bridge.jpg",
                thumbnailUrl: "https://avatars0.githubusercontent.com/u/4583739?s=460&v=4"
              },
              {
                albumId: 1,
                id: 4,
                name: "Sophia",
                notes: 'talks too much',
                itinerary: "NYC Pizza Time",
                url: "https://amp.businessinsider.com/images/5ad8ae04cd862425008b4898-750-563.jpg",
                thumbnailUrl: "https://avatars0.githubusercontent.com/u/25995901?s=460&v=4"
              },
              {
                albumId: 1,
                id: 5,
                name: "Ningyi",
                notes: 'master pepper',
                itinerary: 'Napa Valley Wine',
                url: "https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg?auto=compress&cs=tinysrgb&h=350",
                thumbnailUrl: "https://avatars0.githubusercontent.com/u/4583739?s=460&v=4"
              },
              {
                albumId: 1,
                id: 3,
                title: "officia porro iure quia iusto qui ipsa ut modi",
                url: "http://placehold.it/600/24f355",
                thumbnailUrl: "http://placehold.it/150/24f355"
              },
              {
                albumId: 1,
                id: 4,
                title:
                  "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
                url: "http://placehold.it/600/d32776",
                thumbnailUrl: "http://placehold.it/150/d32776"
              },
              {
                albumId: 1,
                id: 5,
                title: "natus nisi omnis corporis facere molestiae rerum in",
                url: "http://placehold.it/600/f66b97",
                thumbnailUrl: "http://placehold.it/150/f66b97"
              },
              {
                albumId: 1,
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
                  this.props.navigation.navigate("Stops", {
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
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text
                          onPress={() => {
                            /* 1. Navigate to the Details route with params */
                            this.props.navigation.navigate("CommentStop", {
                              itinerary: item
                            });
                          }}>4 Comments</Text>
                      </Button>
                    </Body>
                    <Right>
                      <Text>11h ago</Text>
                    </Right>
                  </CardItem>
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
    display: "flex",
    flex: 1,
    flexDirection: "row",
    margin: 4,
    borderRadius: 5
  },
  container2: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    margin: 4,
    borderRadius: 5,
    backgroundColor: "#eee"
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    marginTop: 25,
    marginLeft: 4,
    width: "75%"
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
    width: "80%",
    color: "#333",
    marginBottom: 20
  },
  closeIt: {
    padding: 10,
    marginLeft: "80%",
    marginTop: 5
  },
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
