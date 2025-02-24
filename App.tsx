import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

import "./global.css";

export default function App() {
  return (
    <View style={styles.container}>
      <Text className="text-red-500">Open up App.tsx to start working on your app!</Text>
      <Button className="bg-red-600">
        <Text>Default</Text>
      </Button>
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: "gray",
          height: 350,
        }}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#dd99ee",
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
