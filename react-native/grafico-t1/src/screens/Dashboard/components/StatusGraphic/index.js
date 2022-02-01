import React from "react";
import { PieChart } from "react-native-chart-kit";
import { Dimensions, Text } from "react-native";
import { View } from "react-native";
const screenWidth = Dimensions.get("window").width;

const StatusGraphic = () => {
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <View>
      <Text>Acessos X Status</Text>
    <PieChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"5"}
      center={[10, 10]}
    />
    <View className='charts-holder__leads'></View>
    </View>
  );
};

export default StatusGraphic;
