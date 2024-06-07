import { View, Text, StyleSheet, Button } from "react-native";
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import Todoslist from "../components/Todo";

export default function ActionsScreen() {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Bonnes actions</Text>
       <Todoslist/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title : {

  }
});