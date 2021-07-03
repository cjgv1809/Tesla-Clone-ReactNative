import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = ({ car: { name, tagLine, tagLineCTA, image } }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine} <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={
            name === "Solar Panels" || name === "Solar Roof"
              ? "Order Now"
              : "Custom Order"
          }
        />
        <StyledButton
          type="secondary"
          content={
            name === "Solar Panels" || name === "Solar Roof"
              ? "Learn More"
              : "Existing Inventory"
          }
        />
      </View>
    </View>
  );
};

export default CarItem;
