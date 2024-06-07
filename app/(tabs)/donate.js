import { Text, View, StyleSheet, TextInput } from "react-native";
import { Image } from 'expo-image';
import { WebView } from 'react-native-webview';


export default function DonateScreen() {
  return (
    <View style={styles.container}>
       <Image style={styles.images}
        contentFit="contain"
        source="https://infosconcourseducation.com/wp-content/uploads/2023/04/Cameroun_2019_-_2-1-2.jpeg"
        />
      <Text style={styles.title}>Faire une donation</Text>
      <Text style={styles.p}>Faites une donation pour aider les personnes ne pouvant pas manger à leur faim.</Text>
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
  p: {
    fontSize: 20,
    textAlign: "center"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  logo: {
    width: 200,
    height: 150
  },
});
