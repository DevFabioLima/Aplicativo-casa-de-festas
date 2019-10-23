import React, { Component } from 'react';
import { View, Image, TouchableOpacity,StyleSheet } from 'react-native';
//createBottomTabNavigator
//createMaterialBottomTabNavigator
//createMaterialTopTabNavigator 
import {  createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';

import Login from './src/screens/Login';
import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';
import FormLista from './src/screens/FormLista';


class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./src/screens/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      
      </View>
    );
  }
}

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({

//For React Navigation 3.+
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: null,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({

//For React Navigation 3.+
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Tela1,
    navigationOptions: ({ navigation }) => ({
      title: 'HOME',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#2E0173',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Tela2,
    navigationOptions: ({ navigation }) => ({
      title: 'Lista',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#2E0173',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Th: {
    screen: FormLista,
    navigationOptions: ({ navigation }) => ({
      title: 'Nome na Lista',
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
      headerStyle: {
        backgroundColor: '#2E0173',
      },
      headerTintColor: '#fff',
    }),
  },
});

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({

//For React Navigation 3.+

//For React Navigation 2.+ need to use DrawerNavigator instead createDrawerNavigator
//const DrawerNavigatorExample = DrawerNavigator({

//For React Navigation 3.+
const DrawerNavigatorExample = createDrawerNavigator({
  Login: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
    },
  },
  //Drawer Optons and indexing
  Tela1: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./src/screens/network.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    },
  },
  Tela2: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Demo Screen 2',
    },
  },
  FormLista: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Nome na lista',
    },
  },

});

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

//For React Navigation 2.+ need to export App only
//export default DrawerNavigatorExample;
//For React Navigation 3.+
export default createAppContainer(DrawerNavigatorExample);