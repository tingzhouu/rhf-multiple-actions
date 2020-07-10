import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useForm } from "react-hook-form";
import RadioField from "./RadioField";

const firstStepFormField = {
  name: "first_fruit",
  options: ["apple", "banana"],
};

const secondStepFormField = {
  name: "second_fruit",
  options: ["strawberry", "raspberry"],
};

const Form = ({ step, setStep, info, setInfo }) => {
  const { register, setValue, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    setInfo(data);
    setStep(step + 1);
  };

  function onPressSubmit() {
    handleSubmit(onSubmit)();
  }

  useEffect(() => {
    register({ name: firstStepFormField.name });
    register({ name: secondStepFormField.name });
  }, [register]);

  // for first step
  if (step === 0) {
    return (
      <View>
        <RadioField
          field={firstStepFormField}
          setValue={setValue}
          watch={watch}
        />
        <Button color="green" title="Next" onPress={onPressSubmit} />
      </View>
    );
  }

  // for second step
  if (step === 1) {
    return (
      <View>
        <RadioField
          field={secondStepFormField}
          setValue={setValue}
          watch={watch}
        />
        <Button color="green" title="Submit" onPress={onPressSubmit} />
      </View>
    );
  }

  // on completion
  return (
    <View>
      <Text style={styles.text}>Form Complete!</Text>
      <Text style={styles.text}>
        Your first fruit is
        <Text style={styles.bold}> {info[firstStepFormField.name]}</Text>
      </Text>
      <Text style={styles.text}>
        Your second fruit is
        <Text style={styles.bold}> {info[secondStepFormField.name]}</Text>
      </Text>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  bold: {
    fontWeight: "bold",
  },
});
