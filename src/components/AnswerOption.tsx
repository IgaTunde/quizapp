import { StyleSheet, Text, View } from "react-native";
import React from "react";

type AnswerOptionProps = {
  option: string;
  isSelected?: boolean;
};

export default function AnswerOption({
  option,
  isSelected,
}: AnswerOptionProps) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isSelected ? "#E1F396" : "white" },
      ]}
    >
      <Text>{option}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 20,
    padding: 30,
  },
});
