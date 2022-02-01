import React from "react";
import { PieChart } from "react-native-svg-charts";
import { Text } from "react-native-svg";
import { Dimensions } from "react-native";

const width = Dimensions.get("screen").width;

const PieChartExemplo = ({ title }) => {
  const values = [50, 50, 40, 95, 35];

  const heigth = (60 / 120) * width;

  const data = values.map((value, index) => ({
    value,
    key: index,
    svg: {
      fill: (
        "#" +
        ((Math.random() * 0xffffff) << 0).toString(16) +
        "000000"
      ).slice(0, 7),
    },
  }));

  const Label = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      return (
        <Text
          key={`label-${index}`}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="black"
          textAnchor={"middle"}
          alignmentBaseline={"middle"}
          fontSize={12}
        >
          {data.value}%
        </Text>
      );
    });
  };

  return (
      <PieChart
        style={{ height: heigth }}
        valueAccessor={({ item }) => item.value}
        data={data}
      >
        <Label />
      </PieChart>
  );
};



export default PieChartExemplo;
