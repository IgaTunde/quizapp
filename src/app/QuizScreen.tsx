import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React, { useContext } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { useQuizContext } from "../providers/QuizProvider";
import QuestionCard from "../components/QuestionCard";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";

export default function QuizScreen() {
  const { question, questionIndex, onNext, score, totalQuestions } =
    useQuizContext();

  return (
    <SafeAreaView style={styles.pages}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Question {questionIndex + 1} / {totalQuestions}
          </Text>
        </View>

        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>20 sec</Text>
          </View>
        ) : (
          <Card title="Well done">
            <Text>
              Correct answers: {score}/{totalQuestions}
            </Text>
            <Text>Best score: 10</Text>
          </Card>
        )}

        <CustomButton
          onPress={onNext}
          title="Next"
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: "#FDFFEF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#005055",
  },
  time: {
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "center",
    color: "#005055",
  },
});
