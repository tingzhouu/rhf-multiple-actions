import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const RadioField = ({ field, setValue, watch }) => {
  const { name, options } = field;
  const currValue = watch(name);
  return (
    <View>
      {options.map((option) => {
        const buttonTitle =
          currValue === option ? `${option} - selected` : option;
        return (
          <Button
            key={option}
            title={buttonTitle}
            onPress={() => setValue(name, option)}
          />
        );
      })}
    </View>
  );
};

export default RadioField;

const styles = StyleSheet.create({});
