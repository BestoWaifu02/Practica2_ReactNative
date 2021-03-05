import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import colors from "../utilities/colors";

export default function Form({ setNum1, setNum2 }) {
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Numero 1"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setNum1(e.nativeEvent.text)}
        ></TextInput>
        <TextInput
          placeholder="Numero 2"
          keyboardType="numeric"
          style={[styles.input, styles.input2]}
          onChange={(e) => setNum2(e.nativeEvent.text)}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: "absolute",
    bottom: -90,
    width: "85%",
    paddingHorizontal: 58,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: "center",
  },
  viewInput: {
    flexDirection: "row",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: "50%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
  },
  input2: {
    width: "50%",
    marginLeft: 5,
    display: "inline-block",
  },
});
