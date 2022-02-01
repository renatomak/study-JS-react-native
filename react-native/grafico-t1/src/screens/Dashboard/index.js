import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PieChartExemplo from "./components/PieChartExemplo";
import {Card} from 'react-native-shadow-cards';
import StatusCard from "./components/StatusCard";

const data = [
  {
    cardColor: "green",
    cardValue: "25",
    title: "Finalizado",
    percentage: "28.41%",
  },
  {
    cardColor: "#FFA500",
    cardValue: "42",
    title: "Lead",
    percentage: "47.73%",
  },
  {
    cardColor: "#DE3131",
    cardValue: "1",
    title: "Erro",
    percentage: "1.14%",
  },
  {
    cardColor: "#4D5056",
    cardValue: "20",
    title: "Checkout",
    percentage: "22.73%",
  },
  {
    cardColor: "#257753",
    cardValue: "1",
    title: "Pendente",
    percentage: "1.14%",
  }
]

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Card style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Acesso X Status</Text>
        <PieChartExemplo />

        <View style={styles.horizontalRow}/>

        <View style={styles.containerCards}>
          {data.map((item, index) => (
             <StatusCard {...item} key={index}/>
          ))}
        </View>
        
      </View>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  horizontalRow: {
    borderWidth: 1,
    borderBottomColor: "#E4E4E4",
    margin: 10,
    opacity: 0.05,
  },
  safeAreaView: {
    width: "100%",
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: "95%",
    backgroundColor: "white",
    borderRadius: 10
  },
  title: {
    textAlign: "center",
    fontSize: 24,
  },
  main: {
    margin: 10,
  },
  containerCards: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }
});

export default Dashboard;
