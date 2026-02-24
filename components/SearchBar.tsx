import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const SearchBar = () => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.searchBarContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TextInput
          placeholder="Search.."
          style={styles.searchInput}
          defaultValue={value}
          onChangeText={(text) => setValue(text)}
        />
        <Pressable
          style={styles.searchBtn}
          onPress={() => {
            Alert.alert("Search", `You searched for: ${value}`);
            console.log(value);
          }}
        >
          <Text style={styles.searchBtnText}>Search Order</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    marginVertical: 20,
    marginHorizontal: 5,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  searchInput: {
    backgroundColor: "#d8d8d8",
    padding: 10,
    borderRadius: 10,
  },
  searchBtn: {
    backgroundColor: "#1165b4",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  searchBtnText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default SearchBar;
