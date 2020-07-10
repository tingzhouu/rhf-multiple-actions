import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Form from "./Form";

export default function App() {
  const [step, setStep] = useState(0);
  const [info, setInfo] = useState({});
  return (
    <View>
      <View style={styles.spacer} />
      <Form step={step} setStep={setStep} setInfo={setInfo} info={info} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  spacer: {
    height: 50,
  },
});
