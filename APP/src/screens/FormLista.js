import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,Button} from 'react-native';
import { Formik } from "formik";
import { TextField } from "react-native-material-textfield";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
  .required()
  .min(5, "Digite seu Nome"),

  sobrenome: Yup.string()
  .required()
  .min(5, "Digite seu Sobrenome"),

  cpf: Yup.string()
    .required()
    .min(11, "CPF invalido")
});

export default props => (
  <Formik
    onSubmit={values => alert(JSON.stringify(values, null, 2))}
    validationSchema={validationSchema}
  >
    {props => {
      return (
        <View style={styles.container}>
        <Image
    source={require('./logo.jpg')}
    style={{ width: 393, height: 69 }}
  />
        <View style={{ padding: 40, paddingTop:130 }}>
          <TextField
            label="Nome"
            onChangeText={text => props.setFieldValue("name", text)}
            error={props.errors.name}
          />
          <TextField
            label="Sobrenome"
            onChangeText={text => props.setFieldValue("sobrenome", text)}
            error={props.errors.sobrenome}
          />
          <TextField
            label="CPF"
            onChangeText={text => props.setFieldValue("cpf", text)}
            error={props.errors.cpf}
          />

          <Button onPress={props.handleSubmit} title="ENVIAR" />

      {/* <Text style={{ fontSize: 20 }}>{JSON.stringify(props, null, 2)}</Text> */ }
        </View>
        </View>
      );
    }}
  </Formik>
);

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    container:{
      paddingTop:0,
      backgroundColor:'#D1F9F9',
      flex:1
    }
  });