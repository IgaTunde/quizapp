import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";

import AnswerOption from "./AnswerOption";
import { Question } from "../types";
import Card from "./Card";

type QuestionProps = {
  question: Question;
};

export default function QuestionCard({ question }: QuestionProps) {


  

  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
        
          />
        ))}
      </View>
    </Card>
  );
}
