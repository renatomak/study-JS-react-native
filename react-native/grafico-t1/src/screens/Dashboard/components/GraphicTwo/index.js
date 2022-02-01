import React from "react";
import { Text } from "react-native-svg";
import { View } from "react-native";
import { PieChart } from "react-native-chart-android"

const GraphicTwo = () => {
    const data = [ 30, 10, 15, 18, 25, 17];

    const pieData = data.map((value, index) => ({
        value,
        key: `${index}-${value}`,
        fill: 'red'
    }))

  return (
    <View>
        <Text>Exemplo</Text>
      <PieChart style={{height: 400}} data={pieData} valueAccessor={({ item }) => item.value}/>
    </View>
  );
};

export default GraphicTwo;
