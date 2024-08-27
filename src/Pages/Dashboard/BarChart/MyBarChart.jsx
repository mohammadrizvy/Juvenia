import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  {
    month: "January",
    sales: 4000,
  },
  {
    month: "February",
    sales: 3000,
  },
  {
    month: "March",
    sales: 2000,
  },
  {
    month: "April",
    sales: 2780,
  },
  {
    month: "May",
    sales: 1890,
  },
  {
    month: "June",
    sales: 2390,
  },
  {
    month: "July",
    sales: 3490,
  },
];

const CustomizedBar = (props) => {
  const { fill, x, y, width, height } = props;
  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      stroke="white" // Customize this as needed
    />
  );
};

const MyBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#04A490" shape={<CustomizedBar />} />
        <text
          x={350}
          y={20}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={23}
          fontWeight="bold"
        >
          Monthly Revenue
        </text>
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default MyBarChart;
