import  React, { useState } from "react";
import { LineChart } from '@mui/x-charts/LineChart';
const SparkLine = () => {
  const [color,setColor] =useState("blue")
  return (
    <div>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4,5] }]}
        series={[
          {
            data: [2, 6, 8, 5, 10],
            color
          },
        ]}
        width={250}
        height={250}
      />
    </div>

  );
};

export default SparkLine;
