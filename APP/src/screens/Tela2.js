import React, {Component } from 'react';
import {View, StyleSheet,SectionList,Text} from 'react-native';
import { black } from 'ansi-colors';

export default class ScrolView extends Component {

  constructor(props){
    super(props);
    this.state = {
     listData:[
       {title:'VERIFICAR NOMES', data:[
         {key:'1', Nome:'Fabio Lucas', Cpf:'123456789'},
         {key:'2', Nome:'José Toalha', Cpf:'123456789'},
         {key:'3', Nome:'João de Barro', Cpf:'123456789'},
         {key:'4', Nome:'Cristiano Ronaldo', Cpf:'123456789'},
         {key:'5', Nome:'Neymar Jr', Cpf:'123456789'},
         {key:'6', Nome:'Mano brown', Cpf:'123456789'}
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
    <Text style={styles.item}>Nome: {item.Nome} CPF: {item.Cpf}</Text>
    
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
  alignItems: "center",
    backgroundColor: "#CCCCCC",
    flexGrow: 1,
    margin: 7,
    padding: 13,
    fontSize:18,
    paddingRight:10
    

},
section:{
  fontSize:24,
  backgroundColor:'#292F2E',
  padding:10,
  color:'#FFFFFF'
}


});