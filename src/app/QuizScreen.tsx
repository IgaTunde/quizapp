import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Pressable,
} from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import QuestionCard from "../components/QuestionCard";
import questions from "../questions";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";

const question = questions[0];

export default function QuizScreen() {
  return (
    <SafeAreaView style={styles.pages}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>20 sec</Text>
          </View>
        ) : (
          <Card title="Well done" />
        )}

        <CustomButton
          onPress={() => console.warn("Button Pressed")}
          onLongPress={() => console.warn("long press")}
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
