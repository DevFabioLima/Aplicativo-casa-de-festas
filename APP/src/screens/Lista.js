import React, {Component } from 'react';
import {View, StyleSheet,SectionList,Text} from 'react-native';
import { black } from 'ansi-colors';

export default class ScrolView extends Component {

  constructor(props){
    super(props);
    this.state = {
     listData:[
       {title:'LISTA', data:[
         {key:'1', Nome:'Fabio Lucas', CPF:'123456789'}
       ]},
      
      ]
    };
  }
 listSectionRender(section){
   return(
      <Text style={styles.section}>{section.title}</Text>
   );
 }
 listRender(item){
   return(
    <Text style={styles.item}>{item.Nome}</Text>
   );
 }

  render(){
    return( 
      <View style={styles.body}>
        <SectionList sections={this.state.listData} renderItem={({item})=>this.listRender(item)} renderSectionHeader={({section})=>this.listSectionRender(section)} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
body:{
  paddingTop:0,
flex:1
},
item:{
  fontSize:17,
  height:40,
  padding:10
},
section:{
  fontSize:15,
  backgroundColor:'#CCCCCC',
  padding:10
}


});