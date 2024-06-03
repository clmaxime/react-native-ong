import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={{
      uri: 'https://upload.wikimedia.org/wikipedia/fr/thumb/2/27/Logo_Action_contre_la_faim.svg/1200px-Logo_Action_contre_la_faim.svg.png',
    }} />
      <Text style={styles.title}>Action contre la faim</Text>
      <Text style={styles.p}>Bienvenue sur l'application ACLF.</Text>
      <Text style={styles.p}>Nous mettons tout en oeuvre pour venir en aide aux personnes ne pouvant pas se nourrir à leur faim.</Text>
        
      <Button
        title="Je donne"
        color="#4CBD35"
        // onPress={() => navigation.navigate("Settings")}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
    alignItems: "center",
  },
  title : {
    fontSize: 25
  },
  p : {
    fontSize: 15,
    textAlign: "center",
    margin: 15
  }
});
