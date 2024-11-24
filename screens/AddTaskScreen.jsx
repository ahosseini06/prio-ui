import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddTaskScreen = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    // Navigate back to HomeScreen, passing the new task as a parameter
    navigation.navigate("Home", { newTask: task });
  };

  return (
    <View style={styles.container}>
      <Text>Add New Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter new task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default AddTaskScreen;
