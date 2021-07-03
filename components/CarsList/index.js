import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

const CarsList = () => {
  return (
    <View style={styles.container}>
      {/* FlatList receives an array of objects(data) and a function for each individual item to render*/}
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;
