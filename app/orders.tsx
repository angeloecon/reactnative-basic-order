import { products } from "@/data/product";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type CardProps = {
  title: string;
  price: number;
  description: string;
  image: string;
};

const CardComp = ({ title, price, description, image }: CardProps) => (
  <View style={styles.cardContainer}>
    <Image source={{ uri: image }} style={styles.cardImg} resizeMode="cover" />
    <View style={styles.infoContainer}>
      <Text style={styles.cardText}>{title}</Text>
      <Text style={styles.cardPrice}>${price}</Text>
    </View>
  </View>
);

const orders = () => {
  return (
    <SafeAreaView style={styles.orderContainer}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderHeaderText}>Orders: </Text>
      </View>
      <View style={styles.orderListContainer}>
        <FlatList
          data={products}
          renderItem={({ item }) => <CardComp {...item} />}
          keyExtractor={(item) => item.id.toLocaleString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    flex: 1,
    flexDirection: "column",
  },
  orderHeader: {
    width: "100%",
  },
  orderHeaderText: {
    fontSize: 18,
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
  },
  orderListContainer: {
    paddingHorizontal: 2,
    marginBottom: 10,
    flex: 1,
  },

  cardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 15,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    overflow: "hidden",
  },
  infoContainer: {
    padding: 10,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  cardPrice: { fontSize: 14, color: "#28a745" },
  cardDesc: {},
  cardImg: {
    width: "100%",
    height: 180,
    backgroundColor: "#f5f5f5",
  },
});

export default orders;
