import { StyleSheet, Text, Pressable } from "react-native";
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
    <Pressable
      style={[
        styles.container,
        isSelected && { backgroundColor: "#E1F396", borderColor: "#E1F396" },
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
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
