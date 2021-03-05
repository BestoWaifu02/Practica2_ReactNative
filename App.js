import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
} from "react-native";

import Form from "./src/components/Form";

import colors from "./src/utilities/colors";

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [suma, setSuma] = useState(null);
  const [resta, setResta] = useState(null);
  const [multi, setMulti] = useState(null);
  const [divi, setDivi] = useState(null);

  /* const onSubmit = () => {
   
    setSuma(suma + num1 + num2);
    setResta(num1 - num2);
    setMulti(num1 * num2);
    setDivi(num1 / num2);
    console.log(typeof num1);
    console.log(setSuma);
    console.log(suma);
  };
   */ console.log(
    suma
  );
  console.log(resta);
  console.log(multi);
  console.log(divi);
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>Encabezado</Text>
        <Form setNum1={setNum1} setNum2={setNum2}></Form>
      </SafeAreaView>

      <Button
        title="Enviar"
        style={styles.button}
        onPress={() => {
          setSuma(parseInt(num1) + parseInt(num2));
          setResta(parseInt(num1) - parseInt(num2));
          setDivi(parseInt(num1) / parseInt(num2));
          setMulti(parseInt(num1) * parseInt(num2));
        }}
      ></Button>
      <SafeAreaView style={styles.safeResultArea}>
        <Text style={styles.text}>
          {suma == null ? "Aqui va la suma" : `Resultado de la suma ${suma}`}
        </Text>
        <Text style={styles.text}>
          {resta == null
            ? "Aqui va la resta"
            : `Resultado de la resta ${resta}`}
        </Text>
        <Text style={styles.text}>
          {multi == null
            ? "Aqui va la multiplicacion"
            : `Resultado de la multipliacion ${multi}`}
        </Text>
        <Text style={styles.text}>
          {divi == null
            ? "Aqui va la division"
            : `Resultado de la division ${divi}`}
        </Text>
        <Text style={[styles.text, styles.marginBottom]}>
          Diego Robledo Mendoza && Luis Andree Jimenez Bernal
        </Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    marginBottom: 120,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
    marginTop: 15,
  },
  button: {
    marginBottom: 50,
    display: "block",
  },
  text: {
    textAlign: "center",
    backgroundColor: "",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3,
  },
  safeResultArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderRadius: 30,
    alignItems: "center",
    paddingTop: 20,
    marginTop: 50,
  },
  marginBottom: {
    marginBottom: 20,
  },
});
