import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StatusCard = ({ cardColor, cardValue, title, percentage }) => {
  const fundo = {
    backgroundColor: cardColor
  }
  return (
    <View style={styles.contentCard}>
      <View style={[styles.card, fundo]}>
        <Text style={styles.cardValue}>{cardValue}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text>{title}</Text>
        <Text>{percentage}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  contentCard: {
    display: "flex",
    flexDirection: "row",
    width: "45%"
  },
  card: {
    backgroundColor: "#1F900A",
    width: 70,
    height: 55,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  cardValue: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,

  },  
  cardInfo: {
    marginLeft: 10,
  }
});

export default StatusCard;
