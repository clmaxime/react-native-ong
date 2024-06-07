import { View, Text, StyleSheet, Button } from "react-native";
import { Image } from 'expo-image';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
       <Image style={styles.logo}
        contentFit="contain"
        source="https://upload.wikimedia.org/wikipedia/fr/thumb/2/27/Logo_Action_contre_la_faim.svg/1200px-Logo_Action_contre_la_faim.svg.png"
        />
      <Text style={styles.title}>Action contre la faim</Text>
      <Text style={styles.p}>Bienvenue sur l'application ACLF.</Text>
      <Text style={styles.p}>Nous mettons tout en oeuvre pour venir en aide aux personnes ne pouvant pas se nourrir à leur faim.</Text>
      <Image style={styles.images}
        contentFit="contain"
        source="https://infosconcourseducation.com/wp-content/uploads/2023/04/Cameroun_2019_-_2-1-2.jpeg"
        />
      <Text style={styles.p}>loremloremlorem lorem lorem lorem lorem lorem lorem ipsum dolor sit amet</Text>
      
      <Link push href="/donate">
        <Button
        title="Je donne"
        color="#4CBD35"
        // onPress={() => navigation.navigate("donation")}
      />
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
  },
  title : {
    color: "#2E6DC0",
    fontSize: 30,
    fontWeight: "bold",
  },
  p : {
    fontSize: 18,
    textAlign: "center",
    margin: 15
  },
  logo: {
    width: 400,
    height: 100
  },
  images: {
    width: 1000,
    height: 200,
  },
});
