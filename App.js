import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [name, setName] = useState("Harshith");
  const [friend, setFriend] = useState({ name: "John", age: "23" });
  const [people, setPeople] = useState([
    { name: "Harshith", age: "21" },
    { name: "John", age: "22" },
    { name: "Harshith", age: "23" },
    { name: "John", age: "24" },
  ]);

  const changeName = () => {
    if (name === "Harshith") {
      setName("Unknown");
    } else {
      setName("Harshith");
    }
  };
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>My friend's name is {friend.name}</Text>
      <Text>My friend's age is {friend.age}</Text>
      <TextInput
        onChangeText={(val) => setName(val)}
        style={styles.input}
        placeholder="Enter your name"
      />
      <Button title="Change Name" onPress={changeName} />

      <View style={styles.people}>
        <ScrollView>
          {people.map((person, index) => (
            <Text key={index}>{person.name}</Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffeedd",
    alignItems: "center",
    justifyContent: "center",
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  people: {
    justifyContent: "space-around",
    alignItems: "center",
  },
});
