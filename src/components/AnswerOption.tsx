import { StyleSheet, Text, View } from "react-native";
import React from "react";

type AnswerOptionProps = {
  option: string;
};

export default function AnswerOption({ option }: AnswerOptionProps) {
  return (
    <View style={styles.container}>
      <Text>{option}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 20,
    padding: 20,
  },
});
