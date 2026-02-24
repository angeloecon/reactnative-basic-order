import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  const handleGoTOOrder = () => {
    router.push("/orders");
  };

  return (
    <SafeAreaView style={styles.indexContainer}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Image
            source={require("../assets/images/react-logo.png")}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>Order.</Text>
        </View>

        <SearchBar />

        <Pressable
          style={({ pressed }) => [
            styles.goToButton,
            pressed && styles.pressedEffect,
          ]}
          onPress={handleGoTOOrder}
        >
          <Text style={styles.goToButtonText}>Go to Order</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  indexContainer: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    //for testing keyavoidingview marginTop: 100
    flexDirection: "column",
    justifyContent: "space-between",
  },
  headerImage: {
    width: 150,
    height: 150,
    alignSelf: "center",
    backgroundColor: "#080808",
    borderRadius: 20,
    marginBottom: 40,
  },
  headerText: {
    textAlign: "center",
    fontSize: 18,
  },
  goToButton: {
    backgroundColor: "#3dc538",
    padding: 10,
    borderRadius: 10,
  },
  goToButtonText: {
    color: "#fff",
    textAlign: "center",
  },

  pressedEffect: {
    transform: [{ scale: 0.96 }],
    opacity: 0.9,
  },
});
