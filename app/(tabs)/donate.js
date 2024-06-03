import { Text, View, StyleSheet, TextInput } from "react-native";

export default function DonateScreen() {
  return (
    <View style={styles.container}>
      <Text>Faire une donation</Text>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value='0,00€'
        style={{padding: 10, fontSize: 30}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
