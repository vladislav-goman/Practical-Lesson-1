import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  TouchableNativeFeedback
} from "react-native";

export default function App() {
  const [isModalVisible, setModalVisibility] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Button title="Click me!" onPress={() => setModalVisibility(true)} />
      </View>
      <Modal visible={isModalVisible} animationType="fade">
        <TouchableNativeFeedback onPress={() => setModalVisibility(false)}>
          <View style={styles.container}>
            <Text style={styles.greetingText}>Hello World</Text>
            <Text>(click one more time to get back)</Text>
          </View>
        </TouchableNativeFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  greetingText: {
    fontSize: 40,
    margin: 20
  }
});
