import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface OrderCardProps {
  title: string;
  price: number;
  image: string;
  onPress?: () => void;
}

const OrderCard = ({ title, price, image, onPress }: OrderCardProps) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image
        source={{ uri: image }}
        style={styles.cardImg}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.cardText}>{title}</Text>
        <Text style={styles.cardPrice}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default OrderCard;
