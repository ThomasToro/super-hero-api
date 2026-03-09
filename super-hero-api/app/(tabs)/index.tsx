import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/home-hero.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          
          <Text style={styles.title}>Hero Api</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/search")}
          >
            <Text style={styles.buttonText}>Buscar Héroes</Text>
            <Ionicons name="search" size={20} color="white" style={styles.icon}/>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  title: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 40,
    letterSpacing: 2,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E62429",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
  },

  buttonText: {
    
  },

  icon: {
    marginLeft: 10,
  },

});