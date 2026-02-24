import OrderCard from "@/components/OrderCard";
import { products } from "@/data/product";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ProductShape = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

const orders = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSelectedProduct, setSelectedProduct] = useState<ProductShape | null>(
    null,
  );

  const handleCardPress = (product: ProductShape) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.orderContainer}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderHeaderText}>Orders: </Text>
      </View>
      <View style={styles.orderListContainer}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <OrderCard {...item} onPress={() => handleCardPress(item)} />
          )}
          keyExtractor={(item) => item.id.toLocaleString()}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image
              source={{ uri: isSelectedProduct?.image }}
              style={styles.modalImage}
              resizeMode="cover"
            />
            <Text style={styles.modalTitle}>{isSelectedProduct?.title}</Text>

            <ScrollView style={styles.descriptionContainer}>
              <Text style={styles.modalDescription}>
                {isSelectedProduct?.description}
              </Text>

              <Text style={styles.modalPrice}>
                ${isSelectedProduct?.price.toFixed(2)}
              </Text>
            </ScrollView>

            <Button
              title="Close"
              onPress={() => setModalVisible(false)}
              color="#d9534f"
            />
          </View>
        </View>
      </Modal>
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

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    maxHeight: "70%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  modalPrice: {
    fontSize: 18,
    color: "#28a745",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  modalDescription: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },
  //limited image height not dynamic
  //good for landsacpe but not portrait
  //need adjustment
  modalImage: {
    width: "100%",
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
});

export default orders;
