import { Tabs } from "expo-router";
import { Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" , 
      tabBarActiveTintColor: "#4CBD35", tabBarIcon: () => <Text><Ionicons name="home" size={25} color="green" /></Text>}} />
      <Tabs.Screen name="donate" options={{ title: "Donate", tabBarActiveTintColor: "#4CBD35", tabBarIcon: () => <Text style={styles.icon}>💸</Text>}} />
      <Tabs.Screen name="mentions" options={{ title: "Mentions", tabBarActiveTintColor: "#4CBD35", tabBarIcon: () => <Text style={styles.icon}>⚖️</Text>}} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 25
  },
});

