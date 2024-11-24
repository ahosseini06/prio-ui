import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Home() {
  const Stack = createNativeStackNavigator();
  const myIcon = <Icon name="add-circle-outline" size={33} color="white" />;

  const getDueTagColor = (n) => {
    if (n >= 1 && n <= 3) return "lightcoral"; // Lighter red
    if (n > 3 && n <= 7) return "orange"; // Orange
    if (n > 7 && n <= 10) return "yellow"; // Yellow
    if (n > 10) return "green"; // Green
    return "red"; // Straight red for n < 1
  };

  const openCreateTask = () => {
    router.push("/createTask");
  };

  const today = new Date();

  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", due: new Date(today) },
    {
      id: 2,
      text: "Task 2",
      due: new Date(today.setDate(today.getDate() + 1)),
    },
    {
      id: 3,
      text: "Task 3",
      due: new Date(today.setDate(today.getDate() + 1)),
    },
    {
      id: 4,
      text: "Task 4",
      due: new Date(today.setDate(today.getDate() + 1)),
    },
    {
      id: 5,
      text: "Task 5",
      due: new Date(today.setDate(today.getDate() + 1)),
    },
    {
      id: 6,
      text: "Task 6",
      due: new Date(today.setDate(today.getDate() + 1)),
    },
    {
      id: 7,
      text: "Task 7",
      due: new Date(today.setDate(today.getDate() + 1)),
    },
    {
      id: 8,
      text: "Task 8",
      due: new Date(today.setDate(today.getDate() + 1)),
    },
    {
      id: 9,
      text: "Task 9",
      due: new Date(today.setDate(today.getDate() + 1)),
    },
    {
      id: 10,
      text: "Task 10",
      due: new Date(today.setDate(today.getDate() + 3)),
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PRIO</Text>

      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => deleteTask(item.id)}>
            <View style={styles.li}>
              <Text style={styles.task}>{item.text}</Text>

              <View
                style={{
                  backgroundColor: getDueTagColor(
                    (new Date(item.due).getTime() - new Date().getTime()) /
                      (1000 * 60 * 60 * 24)
                  ),
                  color: "black",
                  borderRadius: 20,
                  padding: 10,
                  width: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.dueText}>
                  {Math.max(
                    0,
                    Math.ceil(
                      (new Date(item.due).getTime() - new Date().getTime()) /
                        (1000 * 60 * 60 * 24)
                    )
                  )}{" "}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.bottomBar}>
        <Pressable style={styles.btnContainer} onPress={openCreateTask}>
          {myIcon}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2A2A",
    alignItems: "center",
    paddingTop: 50,
    /* make all text in the container white */
    color: "white",
    /* make height full length of phone */
  },
  bottomBar: {
    alignItems: "center",
    justifyContent: "center",
    height: 85,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
  li: {
    backgroundColor: "black",
    padding: 20,
    marginVertical: 5,
    borderRadius: 7,
    border: "solid",
    borderWidth: 0.5,
    borderColor: "#7F7F7F",
    width: "100%",
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  task: {
    color: "white",
    fontFamily: "Helvetica",

    textAlign: "left",
    fontSize: 22,
    fontWeight: "bold",
  },
  dueText: {
    fontFamily: "Helvetica",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    fontWeight: "bold",
    textAlign: "center",
  },
  btnContainer: {
    paddingBottom: 10,
  },
  list: {
    width: "100%",
    /* define solid bottom border of 1 width and white color */
    borderBottomWidth: 1,
    borderBottomColor: "#999999",
    /* define solid bottom border of 1 width and white color */
    borderTopWidth: 1,
    borderTopColor: "#999999",
    backgroundColor: "#1C1C1C",
    padding: 10,
  },
});
