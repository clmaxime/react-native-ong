import { Text, View, StyleSheet } from "react-native";

export default function MentionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>1. Utilisateurs</Text>
      <Text style={styles.caption}>1.1 Données personelles</Text>

      <Text>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</Text>
      <Text style={styles.caption}>1.2 Utilisation</Text>
      <Text>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</Text>

      <Text style={styles.title}>2. Remboursements</Text>

      <Text style={styles.caption}>2.1 Remboursements</Text>
      <Text>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</Text>
      <Text style={styles.caption}>2.2 Litiges</Text>
      <Text>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 27,
    marginTop: 20,
    marginBottom: 10,
  },
  caption: {
    fontSize: 22,
    fontWeight: "bold",
  }
});
