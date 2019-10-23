import React, {Component} from 'react';
import {View, Text,  TextInput, ImageBackground, Image, StyleSheet,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class LogoTitle extends React.Component {
 
  
  render() {
    return (
      <Image
        source={require('./logo.jpg')}
        style={{ width: 393, height: 69 }}
      />
    
     
    );
  }
}

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {inputTexto:'',texto:''};
  }
  
  static navigationOptions = {
      headerTitle: <LogoTitle />,
      headerLeft: null,
    }
  
    render(){
        return (
          <ImageBackground  source={require('./fundo.jpg')} style={styles.imgBackground}>  
          <View style={{flex:1, paddingTop:50, flexDirection:'row',alignItems:'flex-start'}}> 
          
        
              <View style={{flex:2, alignItems:'center',flexDirection:'column',height:400,width:100}}>
              <Icon.Button size={33} name="facebook" backgroundColor="#3b5998">
            <Text style={{ fontFamily: 'Arial', fontSize: 18}}>
             Entrar com Facebook
            </Text>
          </Icon.Button>   
          <View style={{padding:30}}>
          <Icon.Button size={34} name="google" backgroundColor="#DF0101">
            <Text style={{ fontFamily: 'Arial', fontSize: 20}}>
             Entrar com Gmail
            </Text>
          </Icon.Button>   
          </View>
         <View style={{flex:3, marginTop:30, alignItems:'center',flexDirection:'column',backgroundColor:'#E6E6E6',width:300,paddingTop:27,borderRadius:16,}}>           
        <TextInput style={styles.input} placeholder="Login" onChangeText={(inputTexto)=>this.setState({inputTexto})} />
        <TextInput style={styles.inputSenha} placeholder="Senha" onChangeText={(inputTexto)=>this.setState({inputTexto})} />
          <View style={{width:210,padding:20}}>
        <Button title="ENTRAR" onPress={()=> this.props.navigation.navigate('Tela1')} />
        </View>
        </View>
        </View>
        
            </View>
            </ImageBackground>  
        );
    }
}
const styles = StyleSheet.create({
  azulGrande:{
    color:'red',
    fontSize:30,
    textAlign:'center'
  },
  texto:{
  color:'white',
  justifyContent:'center'
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1
},
  
  input:{
    width:230,
    height:36,
    borderWidth:1,
    borderColor:'white',
    borderRadius:5,
   marginBottom:10,
   color:'black',
   backgroundColor:'white'
  },
  inputSenha:{
    width:230,
    height:36,
    borderWidth:1,
    borderColor:'white',
    borderRadius:5,
    marginTop:2,
   marginBottom:10,
   color:'black',
   backgroundColor:'white'
  },
  texto:{
    fontSize:20,
    textAlign:"center",
    color:'white'
  },
  
  
  });
  