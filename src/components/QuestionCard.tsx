import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import AnswerOption from "./AnswerOption";
import { Question } from "../types";
import Card from "./Card";

type QuestionProps = {
  question: Question;
};

export default function QuestionCard({ question }: QuestionProps) {
  useEffect(() => {}, []);

  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
          <AnswerOption key={option} option={option} />
        ))}
      </View>
    </Card>
  );
}
