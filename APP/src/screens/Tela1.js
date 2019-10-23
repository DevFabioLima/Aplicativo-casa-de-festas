import React, { Component } from "react";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions, TouchableOpacity, Image, StyleSheet,View,Text } from 'react-native';
import FormLista from "./FormLista";
import {createStackNavigator} from 'react-navigation-stack';


  //All the screen from the Screen2 will be indexed here
  

    navigationOptions: ({ navigation }) => ({
      title: 'HOME',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#2E0173',
      },
      headerTintColor: '#fff',
    }),



goToNotification = () => {
  this.props.navigate('FormLista');
};

const { width: screenWidth } = Dimensions.get('window')

export default class Tela1 extends Component {

  constructor() {
    super();

    this.state = {
      entries: [
        {
          "ID": "001", 
          "Name": "MC DON JUAN", 
          "thumbnail": "https://br.web.img3.acsta.net/medias/nmedia/18/90/93/20/20120876.jpg"
      },

      {
          "ID": "002", 
          "Name": "FESTA FANTASIA", 
          "thumbnail": "https://br.web.img2.acsta.net/pictures/19/04/10/19/44/2904073.jpg"
      },

      {
          "ID": "003", 
          "Name": "MC MIRELA", 
          "thumbnail": "https://br.web.img2.acsta.net/medias/nmedia/18/90/16/48/20083748.jpg"
      }
      ,

      {
          "ID": "004", 
          "Name": "HUNGRIA", 
          "thumbnail": "https://wallpapercave.com/wp/STgHPst.jpg"
      }
      ,

      {
          "ID": "005", 
          "Name": "005", 
          "thumbnail": "https://wallpapercave.com/wp/vg5q7pY.jpg"
      }
      ,

      {
          "ID": "006", 
          "Name": "006", 
          "thumbnail": "https://wallpapercave.com/wp/b2HsGgL.jpg"
      }
      ],
  }
}


    _renderItem ({item, index}, parallaxProps) {
        return (
       
            <View style={styles.item}>
            
                <ParallaxImage
                    source={{ uri: item.thumbnail }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                    
                />
                  <View style={styles.Btn1}>
                  <Icon.Button size={23} name="check" backgroundColor="#000000">
            <Text style={{ fontFamily: 'Arial', fontSize:15,color:'#FFFFFF'}}>
             Comprar ingresso
            </Text> 
          </Icon.Button>  
          
         
          <Icon.Button size={25} name="list" backgroundColor="#0A31C4">
       <TouchableOpacity  onPress={()=> this.props.navigation.navigate('FormLista')}>
           <Text style={{ fontFamily:'Arial', fontSize:15, color:'#FFFFFF'}}>
             Nome na Lista
            </Text>
            </TouchableOpacity>
          </Icon.Button> 
         
         
                    </View>

                
            </View>
            
        );
    }

    render () {
        return (
          <View style={styles.container}>
            <Image
        source={require('./logo.jpg')}
        style={{ width: 393, height: 69 }}
      />
      <View style={styles.Carousel}>
            <Carousel
                sliderWidth={screenWidth}
                renderItem={this._renderItem.bind(this)} 
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 10}
                data={this.state.entries}
                renderItem={this._renderItem}
                hasParallaxImages={true}
            />
            </View>
          </View>

        );
    }
}
const styles = StyleSheet.create({
  container:{
    paddingTop:0,
    backgroundColor:'#D1F9F9',
    flex:1
  }, 
  Carousel:{
    paddingTop:87
  },
  item: {
    width: screenWidth - 10,
    height: screenWidth - 0,
   
    
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'black',
    borderRadius: 7,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',

  },
  Btn1:{
    paddingTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
 
})